"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Users } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Runner-Up — Xackathon 2025",
      badge: "Special Performer",
      icon: Trophy,
      description:
        "Recognized as a Special Performer among five college teams, engineering an innovative AI prototype within rapid hackathon constraints.",
      color: "text-[#4e3f6e] dark:text-[#c4b7d8]",
      bgColor: "bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25",
      borderColor: "border-[#4e3f6e]/30",
    },
    {
      title: "College Cricket Team Captain",
      badge: "Leadership & Teamwork",
      icon: Users,
      description:
        "Led the college cricket team through competitive tournaments, fostering team collaboration, strategic decision-making, and high-pressure performance.",
      color: "text-[#4e3f6e] dark:text-[#c4b7d8]",
      bgColor: "bg-[#4e3f6e]/10 dark:bg-[#4e3f6e]/25",
      borderColor: "border-[#4e3f6e]/30",
    },
  ];

  return (
    <section id="achievements" className="py-28 border-t border-black/10 dark:border-[#4e3f6e]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#4e3f6e] dark:text-[#c4b7d8]">
            Recognition & Leadership
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black dark:text-white tracking-tight">
            Achievements & Leadership
          </h2>
          <p className="mt-4 font-body text-neutral-600 dark:text-neutral-300 text-lg sm:text-xl leading-relaxed">
            Demonstrated technical excellence under pressure and collaborative leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-3xl p-7 sm:p-10 space-y-5 transition-shadow duration-300 hover:border-[#4e3f6e]/60 hover:shadow-2xl hover:shadow-[#4e3f6e]/10"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`p-3.5 rounded-2xl ${item.bgColor} border ${item.borderColor} ${item.color}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="font-mono px-3 py-1 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-[#4e3f6e]/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-black dark:text-white">{item.title}</h3>
                <p className="font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
