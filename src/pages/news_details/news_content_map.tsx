import { News1, News2 } from "@/pages/news_details/news_1-25";

export const newsContentMap: { [key: string]: React.FC<{ selectedNews: any }> } = {
    1: ({ selectedNews }) => <News1 selectedNews={selectedNews} />,
    2: ({ selectedNews }) => <News2 selectedNews={selectedNews} />,
};
