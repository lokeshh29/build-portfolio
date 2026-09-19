import React from "react";
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
    <section id="achievements" className="py-24 border-t border-black/10 dark:border-[#4e3f6e]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#4e3f6e] dark:text-[#c4b7d8]">
            Recognition & Leadership
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            Achievements & Leadership
          </h2>
          <p className="mt-3 font-body text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
            Demonstrated technical excellence under pressure and collaborative leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 transition-all duration-300 hover:border-[#4e3f6e]/60"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`p-3 rounded-xl ${item.bgColor} border ${item.borderColor} ${item.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-[#4e3f6e]/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-black dark:text-white">{item.title}</h3>
                <p className="font-body text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
