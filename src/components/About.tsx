const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          About the Challenge
        </h2>
        <div className="bg-card border border-border rounded-xl p-8 md:p-12 hover:border-primary/50 transition-all duration-300">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Hacktoberfest 2025 is a month-long open-source celebration where developers across the globe contribute to
            projects, improve software, and earn a digital badge. Whether you're a beginner or an experienced coder,
            this is your chance to make an impact, learn, and collaborate with the community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
