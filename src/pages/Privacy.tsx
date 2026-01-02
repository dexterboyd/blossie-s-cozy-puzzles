import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            <div className="bg-card rounded-2xl shadow-warm p-8 md:p-10 prose prose-lg max-w-none">
              <p className="text-muted-foreground">Last updated: January 2026</p>

              <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-foreground mb-4">
                We collect information you provide directly to us, such as when you
                make a purchase, sign up for our newsletter, or contact us with questions.
              </p>

              <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-foreground mb-4">
                We use the information we collect to process transactions, send you
                order updates, and respond to your inquiries. We may also use your
                information to send you marketing communications about puzzles you
                might love.
              </p>

              <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Information Sharing
              </h2>
              <p className="text-foreground mb-4">
                We do not sell your personal information. We may share your information
                with third-party service providers who assist us in operating our
                website and fulfilling orders.
              </p>

              <h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-foreground">
                If you have questions about this Privacy Policy, please contact us at
                hello@blossiespuzzles.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
