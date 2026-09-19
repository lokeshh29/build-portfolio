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
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-500/10",
      borderColor: "border-amber-200 dark:border-amber-500/30",
    },
    {
      title: "College Cricket Team Captain",
      badge: "Leadership & Teamwork",
      icon: Users,
      description:
        "Led the college cricket team through competitive tournaments, fostering team collaboration, strategic decision-making, and high-pressure performance.",
      color: "text-sky-600 dark:text-sky-400",
      bgColor: "bg-sky-50 dark:bg-sky-500/10",
      borderColor: "border-sky-200 dark:border-sky-500/30",
    },
  ];

  return (
    <section id="achievements" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Recognition & Leadership
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Achievements & Leadership
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Demonstrated technical excellence under pressure and collaborative leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`p-3 rounded-xl ${item.bgColor} border ${item.borderColor} ${item.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
