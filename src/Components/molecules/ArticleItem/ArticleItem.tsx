import { Article } from "../../../shared/types/types";
import { formatCurrencyForLocale } from "../../../shared/util";

export const ArticleItem = ({
  articleNo,
  articleName,
  articleImageUrl,
  price,
}: Article) => {
  return (
    <div className="flex items-center mb-6 gap-x-4 text-gray-900">
      <div className="flex h-16 w-24 rounded-xl bg-gray-50 items-center justify-center">
        <img
          className="h-16 m-2"
          src={articleImageUrl ?? "./assets/Noimg.webp"}
          alt="article link "
        />
      </div>
      <div className="flex-auto">
        <p className="font-semibold">{articleName}</p>
        <p className="text-gray-500">Article number: {articleNo}</p>
        <p>{formatCurrencyForLocale(price)}</p>
      </div>
    </div>
  );
};
