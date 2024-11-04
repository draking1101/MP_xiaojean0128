import { News1 } from "@/pages/news_details/news_1-25";

export const newsContentMap: { [key: string]: React.FC<{ selectedNews: any }> } = {
    1: ({ selectedNews }) => <News1 selectedNews={selectedNews} />,
};
