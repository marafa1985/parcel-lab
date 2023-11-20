import { Card } from "components/atoms";
import { ArticleItem } from "components/molecules/ArticleItem/ArticleItem";
import { Article } from "shared/types/types";

type ArticlesDetailsProps = {
  articles: Article[];
};
export const ArticlesDetails = ({ articles }: ArticlesDetailsProps) => {
  return (
    <Card className="h-full py-2 px-4">
      <header>
        <h2 className="mt-8 mb-4 text-2xl text-bold leading-9 tracking-tight text-gray-900">
          Articles
        </h2>
      </header>

      <ol className="list-none">
        {articles &&
          articles.map((article) => (
            <li key={article.articleNo}>
              <ArticleItem {...article} />
            </li>
          ))}
      </ol>
    </Card>
  );
};
