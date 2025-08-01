import React from "react";
import { Card, CardContent } from "./ui/card";
import { features } from "@/data/features";
import { statistics } from "@/data/statistics";
import { howItWorks } from "@/data/howItWorks";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { ArrowRight, User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const FeatureSection = () => {
  return (
    <div>
      <section className="w-full py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">
            Powerful Features for Your AI Career
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card
                key={i}
                className="bg-background/80 border border-border hover:border-primary hover:shadow-md transition-colors duration-300"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-16 lg:py-24 bg-muted/40 dark:bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((statistic, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-2"
              >
                <h3 className="text-2xl md:text-4xl font-bold">
                  {statistic.data}
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  {statistic.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground md:text-lg text-center">
            Four key steps to kickstart your AI career
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((howItWork, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-2"
              >
                <p className="w-14 h-14 mt-8 rounded-full bg-muted flex items-center justify-center">
                  {howItWork.icon}
                </p>
                <p className="text-lg font-bold">{howItWork.title}</p>
                <h3 className="text-muted-foreground">
                  {howItWork.description}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-16 lg:py-24 bg-muted/40 dark:bg-muted/20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {testimonials.map((testimonial, i) => (
              <Card
                key={i}
                className="bg-background/80 border border-border hover:shadow-md"
              >
                <CardContent className="flex flex-col">
                  <div className="flex mb-2">
                    <User className="w-10 h-10 bg-muted mt-1 p-1 rounded-full" />
                    <div className="flex flex-col ml-4">
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <h4 className="text-muted-foreground">
                        {testimonial.profession}
                      </h4>
                      <h4>{testimonial.company}</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    &quot;{testimonial.comment}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground md:text-lg text-center">
            Answers to common questions about our AI career coaching platform
          </p>
          <Accordion
            type="single"
            collapsible
            className="w-full bg-background/90 mt-6 px-6 py-2 rounded-lg shadow-lg border border-border"
          >
            {faqs.map((faq, i) => (
              <AccordionItem value={`item${i}`} key={i}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="w-full py-8 md:py-16 lg:py-24 text-muted bg-gradient-to-b from-primary to-primary/50 rounded-md">
        <div className="container flex flex-col items-center justify-center mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-4 text-background">
            Join Our Community of AI Professionals
          </h2>
          <p className="text-background/80 md:text-lg text-center">
            Connect with like-minded individuals and enhance your skills
          </p>
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              variant="secondary"
              className="h-11 mt-5 bg-background/90 text-primary border border-border hover:bg-background hover:text-primary hover:border-primary focus:ring-2 focus:ring-ring transition"
            >
              Start Your Journey Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
