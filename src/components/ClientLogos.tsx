
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const ClientLogos = () => {
  const clients = [
    { name: "Acme Co", initial: "A" },
    { name: "Globex", initial: "G" },
    { name: "Soylent", initial: "S" },
    { name: "Initech", initial: "I" },
    { name: "Umbrella", initial: "U" },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">Trusted by innovative businesses</p>
        </div>
        
        <div className="flex justify-center items-center flex-wrap gap-12 md:gap-16">
          {clients.map((client, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="flex items-center justify-center h-16 w-16 lg:h-20 lg:w-20 bg-gray-100 rounded-full text-2xl font-bold text-zaploom/80 cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-gray-50">
                  {client.initial}
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex justify-between space-x-4">
                  <div>
                    <h4 className="text-sm font-semibold">{client.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      "Working with Zaploom transformed our online presence."
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
