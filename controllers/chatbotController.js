import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const chatBot = async (req, res) => {
  const { prompt } = req.body;
  try {
    // const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // const result = await model.generateContent(prompt);
    // const text = result.response.text();
    // console.log(text);
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
    });

    console.log(response);

    res.status(200).send({
      success: true,
      data: { geminiResponse: response.text, userPrompt: prompt },
    });
  } catch (error) {
    res.status(404).send({
      error: error.message,
    });
  }
};

export { chatBot };
