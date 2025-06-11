import portfoliodetailsdata from "@/components/pages/portfolioDetails/data/PortfolioDetailsData";
import PortfolioDetailTemplate from "@/components/pages/portfolioDetails/portfoliodetailtemplate/PortfolioDetailTemplate";

export function generateStaticParams() {
  return Object.keys(portfoliodetailsdata).map((portfoliodetail) => ({
    portfoliodetail: portfoliodetail,
  }));
}

export async function generateMetadata({ params }) {
  const { portfoliodetail } = await params;
  const content = portfoliodetailsdata[portfoliodetail];

  if (!content) {
    return {
      title: 'Portfolio Not Found',
    };
  }

  return {
    title: content.HeroBanner?.[0]?.title || 'Portfolio Detail',
    description: content.HeroBanner?.[0]?.para1 || 'Discover our portfolio and projects',
  };
}

const PortfolioDetailsPage = async ({ params }) => {
  const { portfoliodetail } = await params;

  const content = portfoliodetailsdata[portfoliodetail];

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Portfolio Not Found</h1>
          <p>The portfolio "{portfoliodetail}" does not exist.</p>
          <p className="text-sm text-gray-500 mt-2">
            Available portfolios: {Object.keys(portfoliodetailsdata).join(', ')}
          </p>
        </div>
      </div>
    );
  }

  return <PortfolioDetailTemplate data={content} />;
};

export default PortfolioDetailsPage;