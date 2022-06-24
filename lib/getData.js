import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getData(pathName) {
    const directory = path.join(process.cwd(), `lib/${pathName}`);
    const fileNames = fs.readdirSync(directory);
    const data = await Promise.all(fileNames.map(async (fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();
        return {
            id,
            contentHtml,
            ...matterResult.data,
        };
    }));
    return data.sort();
}


export function getAllPostIds(pathName) {
    const directory = path.join(process.cwd(), `lib/${pathName}`);
    const fileNames = fs.readdirSync(directory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id, pathName) {
    const directory = path.join(process.cwd(), `lib/${pathName}`);
    const fullPath = path.join(directory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}