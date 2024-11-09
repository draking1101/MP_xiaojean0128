import { News0, News1 } from "@/pages/news_details/news_0-25";

export const newsContentMap: { [key: string]: React.FC<{ selectedNews: any }> } = {
    0: ({ selectedNews }) => <News0 selectedNews={selectedNews} />,
    1: ({ selectedNews }) => <News1 selectedNews={selectedNews} />,
};
