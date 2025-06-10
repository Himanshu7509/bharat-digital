import servicesData from "@/components/pages/services/data/OtherServicesData";
import ServiceTemplates from "@/components/pages/services/otherServicesTemplates/ServicesTemplates";

export function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service: service,
  }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const content = servicesData[service];
  
  if (!content) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: content.HeroBanner[0].title,
    description: content.HeroBanner[0].para1,
  };
}

const ServicePage = async ({ params }) => {
  const { service } = await params;
  
  const content = servicesData[service];

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <p>The service "{service}" does not exist.</p>
          <p className="text-sm text-gray-500 mt-2">
            Available services: {Object.keys(servicesData).join(', ')}
          </p>
        </div>
      </div>
    );
  }

  return <ServiceTemplates data={content} />;
};

export default ServicePage;