"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Send } from "lucide-react";
import { Section } from "@/components/Section";
import { SocialIconLink } from "@/components/SocialIconLink";
import { profile } from "@/data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ subject: "", message: "" });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Feel free to reach out for collaborations or just a friendly hello"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-neutral-800/50 rounded-xl"
        >
          <h3 className="font-medium mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1.5"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="Project inquiry..."
                className="w-full px-4 py-2.5 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-shadow"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Hi! I'd like to..."
                rows={4}
                className="w-full px-4 py-2.5 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>

          {/* Copy Email */}
          <div className="mt-4 pt-4 border-t border-neutral-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-400">
                Or copy my email:
              </span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    {profile.email}
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-medium mb-4">Connect</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {profile.socialLinks.map((link) => (
              <SocialIconLink
                key={link.name}
                name={link.name}
                url={link.url}
                icon={link.icon}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
