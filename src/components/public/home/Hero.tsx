"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2;
    }
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full -mt-24 md:-mt-32">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-orange-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Engineering • Design • Construction
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            We <span className="text-orange-400">Build</span> <br className="hidden md:block" />
            the foundations for <br className="hidden md:block" />
            Better <span className="text-orange-400">Tomorrow</span>
          </h1>

          <p className="text-slate-300 text-lg mb-10 max-w-2xl leading-relaxed">
            From concept, design and planning to construction and project delivery. We turn visionary ideas into enduring realities with unmatched precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-full text-center hover:bg-orange-600 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-full text-center border border-white/20 hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}