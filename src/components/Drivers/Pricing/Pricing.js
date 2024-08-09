const pricingPlans = [
  {
    title: "Free",
    price: "Free",
    description: "Forever free",
    features: ["1 user", "Plan features", "Product support"],
    popular: false,
  },
  {
    title: "Startup",
    price: "$39",
    description: "All the basics for starting a new business",
    features: ["2 users", "Plan features", "Product support"],
    popular: true,
  },
  {
    title: "Team",
    price: "$89",
    description: "Everything you need for a growing business",
    features: ["5 users", "Plan features", "Product support"],
    popular: false,
  },
  {
    title: "Enterprise",
    price: "$149",
    description: "Advanced features for scaling your business",
    features: ["10 users", "Plan features", "Product support"],
    popular: false,
  },
];

const Pricing = ({ title, description, pricingPlans }) => {
  return (
    <div className="py-10">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            {title}
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            {description}
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col border ${
                plan.popular
                  ? "border-2 border-blue-600 shadow-xl"
                  : "border-gray-200"
              } text-center rounded-xl p-8 dark:border-neutral-800`}
            >
              {plan.popular && (
                <p className="mb-3">
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                    Most popular
                  </span>
                </p>
              )}
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                {plan.title}
              </h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                {plan.price}
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                {plan.description}
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-x-2">
                    <svg
                      className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-800 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                className={`mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg ${
                  plan.popular
                    ? "border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                    : "border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                }`}
                href="#"
              >
                Sign up
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
