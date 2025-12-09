import { GoogleGenAI } from "@google/genai";
import { ResumeData } from "../types";

const apiKey = process.env.API_KEY || '';
// Initialize loosely; actual calls will fail gracefully if key is missing in UI
const ai = new GoogleGenAI({ apiKey });

export const generateResumeContent = async (data: ResumeData): Promise<string> => {
  if (!apiKey) return "Error: API Key is missing.";

  const prompt = `
    You are an expert HR consultant. Create a professional resume in Markdown format based on the following data.
    Make it look polished, professional, and ready to be converted to a document.
    
    Name: ${data.fullName}
    Contact: ${data.email} | ${data.phone}
    
    Professional Summary Context: ${data.summary}
    
    Experience:
    ${data.experience.map(e => `- ${e.role} at ${e.company} (${e.duration}): ${e.details}`).join('\n')}
    
    Education:
    ${data.education.map(e => `- ${e.degree} from ${e.institution} (${e.year})`).join('\n')}
    
    Skills: ${data.skills.join(', ')}
    
    Output Format:
    # [Name]
    **[Contact Info]**
    
    ## Professional Summary
    [Refined Summary]
    
    ## Experience
    ...
    
    ## Education
    ...
    
    ## Skills
    ...
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Failed to generate resume content.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while generating the resume. Please check your API key.";
  }
};

export const generateInterviewTips = async (jobRole: string): Promise<string> => {
  if (!apiKey) return "Error: API Key is missing.";

  const prompt = `Provide 5 specific, high-impact interview grooming tips for a candidate applying for a "${jobRole}" position. Keep it concise and encouraging.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "No tips available.";
  } catch (error) {
    console.error(error);
    return "Could not fetch interview tips.";
  }
};
