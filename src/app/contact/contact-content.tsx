"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useToast } from "../../hooks/use-toast";
import {
    Card,
    CardContent,
} from "../../components/ui/card";
import { createClient } from "@/lib/supabase";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../../components/ui/dialog";
import placeholderImages from "@/lib/placeholder-images.json";
import contactimage from "../../../public/Image/who-we-are-img.jpg";

const contactFormSchema = z.object({
    name: z.string().min(1, "Your name is required."),
    email: z.string().email("Invalid email address."),
    subject: z.string().min(1, "Subject is required."),
    message: z.string().min(1, "Message cannot be empty."),
});

function ContactForm() {
    const { toast } = useToast();
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof contactFormSchema>) {
        setIsSubmitting(true);
        try {
            const supabase = createClient();

            const { error } = await supabase.from('contact_submissions').insert({
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,
                form_type: 'contact',
            });

            if (error) {
                throw error;
            }

            setIsSuccessOpen(true);
            form.reset();
        } catch (error) {
            console.error("Form submission error:", error);
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: "An error occurred. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <Card className="w-full shadow-xl shadow-primary/5">
                <CardContent className="p-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Regarding your services" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us a little bit about your needs"
                                                className="min-h-[150px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="text-center">
                                <Button type="submit" size="lg" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader className="flex flex-col items-center justify-center text-center space-y-4 pt-4">
                        <div className="rounded-full bg-green-100 p-3">
                            <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                        <DialogTitle className="text-2xl">Message Sent!</DialogTitle>
                        <DialogDescription className="text-center text-base">
                            Thank you for contacting us. We have received your message successfully.
                            <br />
                            <span className="block mt-2">
                                Our team will get back to you shortly.
                            </span>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center pb-4">
                        <Button onClick={() => setIsSuccessOpen(false)} className="px-8">
                            Close
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

const contactInfo = [
    {
        icon: MapPin,
        title: "Address",
        details: ["Bengaluru, Karnataka, India"],
    },
    {
        icon: Phone,
        title: "Call Us",
        details: ["+91 9591633648"],
    },
    {
        icon: Mail,
        title: "Email Us",
        details: ["info@cacsfinaccservices.com"],
    },
];

export default function ContactContent() {
    return (
        <main>
            <section id="hero" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                            <h1 className="text-2xl md:text-4xl font-extrabold font-headline tracking-tight text-slate-800 dark:text-white">
                                <span className="text-primary">
                                    Virtual CFO, NRI Tax & Compliance
                                </span>
                                <br />
                                <span className="text-slate-800 dark:text-white">— All in One Place</span>
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                                We help startups, NRIs & SMEs with taxation, ROC, MIS, financial
                                strategy
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src={contactimage}
                                alt="Business team collaborating"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-xl shadow-primary/5 object-cover"
                                data-ai-hint={placeholderImages.contactPage.hero.hint}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-extrabold font-headline text-slate-800 dark:text-white">
                            Contact
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                            Connect with us — let’s strategize your next move.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-5 space-y-6">
                            {contactInfo.map((item, index) => (
                                <Card key={index} className="shadow-xl shadow-primary/5 hover:border-primary/20 transition-all">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold font-headline">
                                                {item.title}
                                            </h3>
                                            {item.details.map((line, i) => (
                                                <p key={i} className="text-muted-foreground">
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            <div className="rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7749229836!2d77.30126571811046!3d12.954459534384092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1745172245345!5m2!1sen!2sin"
                                    className="w-full h-80 border-0"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
