"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Trophy } from "lucide-react";
import { Section } from "@/components/Section";
import { profile, type TimelineItem } from "@/data/profile";

export function Timeline() {
  return (
    <Section
      id="timeline"
      title="Journey"
      subtitle="My professional and educational path"
      className="bg-neutral-900/50"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience Column */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-8">
            <Briefcase className="w-5 h-5 text-blue-400" />
            Experience
          </h3>
          <div className="space-y-8 border-l-2 border-neutral-800 pl-8 ml-3">
            {profile.experiences.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} color="blue" />
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-8">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            Education
          </h3>
          <div className="space-y-8 border-l-2 border-neutral-800 pl-8 ml-3">
            {profile.education.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} color="purple" />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TimelineCard({ item, index, color }: { item: TimelineItem; index: number; color: "blue" | "purple" }) {
  const isBlue = color === "blue";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      {/* Dot on the line */}
      <div className={`absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-neutral-950 ${isBlue ? "bg-blue-500" : "bg-purple-500"} shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-125 transition-transform duration-300`} />

      <div className="bg-neutral-800/50 border border-neutral-700/50 p-6 rounded-2xl hover:bg-neutral-800 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h4 className="text-lg font-bold text-white">{item.title}</h4>
          <span className={`text-xs font-bold px-2 py-1 rounded-full w-fit ${isBlue ? "bg-blue-900/30 text-blue-300" : "bg-purple-900/30 text-purple-300"}`}>
            {item.startDate} - {item.endDate}
          </span>
        </div>
        
        <div className="text-neutral-400 font-medium mb-3 flex items-center gap-2">
          {item.organization}
        </div>
        
        <p className="text-neutral-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
