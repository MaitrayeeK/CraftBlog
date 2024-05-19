import { openai } from "./index";

export const generate = async (content) => {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                "role": "system", "content": "You will be provided with the parameters given as a key: value. \n Where keys will be like following,\n Topic: Which is the main area to write a blog\n Subtopics: Will be the covered in whole blog\n Inspired by: Get inspiration from their blogs\n Tags: The areas where blog will be resides\n Min length: Minimum length of the blog in words\n Max length: Maximum length of the blog in words\n And your task is to include some creativity, emojis, use a particular tone and expressions based on topic and subtopics, use the sources from internet or a famous bloggers/writers blog for inspiration and generate the eye- catchy blog.\n Do note generate the blogs by yourself, generate whenever I'll give you an input like above with my values, take it as instructions to respond me in future inputs."
            },
            { "role": "user", "content": content }],
        model: "gpt-3.5-turbo-1106",
    });

    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
    // return "JavaScript doesn't stop at the browser; it extends its reach to native app development. Technologies like React Native bridge the gap, allowing for cross-platform mobile app creation using familiar JavaScript syntax. The code once, deploy everywhere concept reshapes the mobile development landscape."
}