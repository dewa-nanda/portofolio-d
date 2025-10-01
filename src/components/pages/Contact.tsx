"use client";

import { motion } from "motion/react";
import Card from "../ui/Card";
import Link from "next/link";
import ContactData from "@/lib/data/contact";
import { useForm } from "react-hook-form";
import { TFormContact, TFormContactSchema } from "@/types/form/FormContact";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../ui/FormField";

const Contact = () => {
  const personalContact = ContactData.personalContact();
  const socialMedia = ContactData.socialMedia();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TFormContactSchema),
  });

  function onSubmit(data: TFormContact) {
    const emailTo = "dewananda124@gmail.com";
    const subject = encodeURIComponent(`Halo salam kenal saya ${data.name}`);
    const body = encodeURIComponent(data.message);

    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row gap-2 text-white">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl">Get in touch</h1>

          <div className="flex flex-col gap-4 mt-10">
            {personalContact.map((v, k) => (
              <div
                className="flex flex-col gap-1"
                key={`perconal-contact-${k}`}
              >
                <h3>{v.label}</h3>
                <p>{v.value}</p>
              </div>
            ))}

            <div>
              <h3>Follow me on:</h3>
              <div className="flex gap-2">
                {socialMedia.map((v, k) => {
                  const Icon = v.icon.name;

                  return (
                    <Link
                      href={v.link}
                      target="_blank"
                      className="w-fit"
                      key={`social-media-${k}`}
                    >
                      <Card className="mt-2 bg-[#151e30] w-fit p-1 border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#ef4444]">
                        <Icon
                          size={v.icon.size}
                          className={`${v.icon.style}`}
                        />
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Card className="bg-[#1d283a] border-1 border-[#2a3647] p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  className="w-full sm:w-1/2"
                  placeholder="Your name"
                  name="name"
                  label="Name"
                  register={register}
                  errors={errors}
                />

                <FormField
                  className="w-full sm:w-1/2"
                  placeholder="Your email address"
                  name="email"
                  label="Email"
                  register={register}
                  errors={errors}
                />
              </div>

              <FormField
                className="w-full mt-4"
                placeholder="Write something....."
                name="message"
                label="Message"
                type="textarea"
                register={register}
                errors={errors}
              />

              <button
                className="w-full mt-6 rounded-lg p-2 bg-gray-900 text-white font-medium ring-1 ring-gray-700 hover:bg-gray-800 hover:ring-gray-500 transition-colors hover:cursor-pointer"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
