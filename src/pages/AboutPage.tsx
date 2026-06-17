import React from 'react';
import PageHeader from '../components/PageHeader';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  'Observe critically',
  'Ask meaningful questions',
  'Frame problems effectively',
  'Gather evidence responsibly',
  'Work collaboratively',
  'Communicate findings clearly',
  'Contribute to collective knowledge'
];

const pathways = [
  'KREST',
  'REFLECT',
  'KRIP',
  'Research Circles',
  'Faculty-Led Research'
];

export default function AboutPage() {
  return (
    <div className="w-full font-sans text-[#202124] bg-white">
      <PageHeader
        category="ABOUT RÉ"
        title="A culture built around questions."
        description="A research ecosystem designed to help students cultivate curiosity, develop research capability, and contribute knowledge that endures beyond their time on campus."
        accentColor="green"
        gradientTheme="blue"
      />

      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">

        <section className="py-20 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#5F6368] mb-8">About RÉ</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-12">
              A culture built around questions.
            </h1>

            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-[#5F6368] max-w-3xl">
              <p>Long before publications, patents, prototypes, and research awards, there was a simple observation:</p>
              <p className="text-[#202124] font-medium text-2xl">Students are naturally curious.</p>
              <p>
                They ask questions, challenge assumptions, explore possibilities, and imagine alternatives.
              </p>
              <p>
                Yet much of formal education focuses on finding answers rather than learning how to investigate questions.
              </p>
              <p>
                Ré was created to bridge that gap.
              </p>
              <div className="space-y-3 py-6 text-[#202124]">
                <p>Not as a program.</p>
                <p>Not as an event series.</p>
                <p>Not as a student club.</p>
              </div>
              <p>
                But as a research ecosystem designed to help students cultivate curiosity, develop research capability, and contribute knowledge that endures beyond their time on campus.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-[#E8EAED]">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#5F6368] mb-6">Why Ré Exists</p>

            <div className="space-y-8 text-lg leading-relaxed text-[#5F6368]">
              <p>
                Every year, thousands of student ideas emerge inside classrooms, projects, competitions, and conversations.
              </p>
              <p>Many show promise.</p>
              <p>Few survive.</p>

              <div className="py-10 space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-[#202124]">Projects end.</h2>
                <h2 className="text-4xl md:text-6xl font-bold text-[#202124]">Teams graduate.</h2>
                <h2 className="text-4xl md:text-6xl font-bold text-[#202124]">Knowledge disappears.</h2>
              </div>

              <p>
                The next group often starts again from the beginning.
              </p>
              <p>
                Ré was established to ensure that discovery does not end when a semester does.
              </p>
              <p>
                By creating structures for mentorship, documentation, collaboration, and continuity, Ré enables knowledge to grow across generations of learners.
              </p>
              <p className="text-[#202124] font-medium">
                Because meaningful research is not built in isolation. It is built over time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-[#E8EAED]">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#5F6368] mb-6">From Initiative to Ecosystem</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Growth through continuity.
              </h2>
            </div>

            <div className="space-y-6 text-lg text-[#5F6368] leading-relaxed">
              <p>
                What began as a student-focused effort to encourage research has evolved into a vibrant ecosystem that supports inquiry across disciplines.
              </p>
              <p>
                Over the years, Ré has brought together students, faculty mentors, researchers, industry experts, alumni, and communities through a shared commitment to exploration and knowledge creation.
              </p>
              <p>
                Today, research at Ré extends beyond laboratories and classrooms.
              </p>
              <p>
                It includes field investigations, interdisciplinary collaborations, community-based studies, technology development, cultural documentation, sustainability research, innovation challenges, and scholarly contributions.
              </p>
              <p className="text-[#202124] font-medium">
                To make research accessible, meaningful, and transformative for every learner willing to ask deeper questions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-[#E8EAED]">
          <p className="text-sm uppercase tracking-[0.25em] text-[#5F6368] mb-6">What Makes Ré Different</p>

          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Ré begins with curiosity.
            </h2>

            <p className="text-lg leading-relaxed text-[#5F6368]">
              Rather than treating research as a single activity, competition, or academic requirement, Ré views research as a capability that can be developed over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {capabilities.map((item) => (
              <div key={item} className="flex items-center gap-4 py-4 border-b border-[#E8EAED]">
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg text-[#5F6368] max-w-3xl">
            The outcome is not simply a project. It is the development of a mindset that remains valuable long after graduation.
          </p>
        </section>

        <section className="py-20 border-t border-[#E8EAED]">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#5F6368] mb-6">Research Through Communities</p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Research Circles.
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-[#5F6368]">
              <p>
                At the heart of Ré are Research Circles.
              </p>
              <p>
                Research Circles are long-term communities of inquiry where students and faculty work together around shared areas of exploration.
              </p>
              <p>
                Each circle investigates challenges that matter, builds upon previous discoveries, and creates opportunities for future researchers to continue the journey.
              </p>
              <p className="text-[#202124] font-medium">
                Rather than restarting every year, knowledge accumulates.
              </p>
              <p>
                Every publication, research brief, prototype, field study, and documented finding becomes part of a growing body of institutional knowledge.
              </p>
              <p>
                This continuity transforms individual effort into collective progress.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-[#E8EAED]">
          <p className="text-sm uppercase tracking-[0.25em] text-[#5F6368] mb-6">Building Pathways Into Research</p>

          <div className="grid md:grid-cols-5 gap-4 mb-10">
            {pathways.map((pathway) => (
              <div
                key={pathway}
                className="border border-[#DADCE0] rounded-2xl px-5 py-6 text-center font-medium bg-[#F8F9FA]"
              >
                {pathway}
              </div>
            ))}
          </div>

          <div className="max-w-4xl text-lg leading-relaxed text-[#5F6368] space-y-6">
            <p>
              Research can often seem intimidating to students encountering it for the first time.
            </p>
            <p>
              Ré addresses this through structured pathways that allow learners to gradually develop confidence and capability.
            </p>
            <p>
              Whether someone is taking their first step into inquiry or contributing to advanced investigations, there is a pathway designed to support their growth.
            </p>
          </div>
        </section>

        <section className="py-20 border-t border-[#E8EAED]">
          <p className="text-sm uppercase tracking-[0.25em] text-[#5F6368] mb-6">Research That Creates Impact</p>

          <div className="max-w-4xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Contribution over activity.
            </h2>

            <p className="text-lg text-[#5F6368] leading-relaxed">
              Over the years, members of the Ré ecosystem have produced publications, patents, prototypes, research reports, innovation outcomes, and interdisciplinary projects that address real-world challenges.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['Publications', 'Patents', 'Prototypes', 'Research Reports', 'Innovation Outcomes'].map((item) => (
                <div key={item} className="border-l-2 border-[#1A73E8] pl-4 py-3">
                  <div className="font-medium">{item}</div>
                </div>
              ))}
            </div>

            <p className="text-lg text-[#5F6368] leading-relaxed">
              These achievements are not viewed as endpoints. They are evidence of a thriving research culture—one where curiosity is transformed into meaningful action.
            </p>

            <p className="text-lg text-[#202124] font-medium">
              Impact is measured not only by what is created today, but by what future researchers are able to build upon tomorrow.
            </p>
          </div>
        </section>

        <section className="py-20 border-t border-[#E8EAED]">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#5F6368] mb-6">The Community Behind Ré</p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
              Research is ultimately a human endeavor.
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-[#5F6368]">
              <p>
                Behind every investigation are mentors who guide, students who explore, collaborators who contribute, and communities who inspire new questions.
              </p>
              <p>
                Ré thrives because of the people who believe that learning extends beyond receiving information.
              </p>
              <p>
                It thrives because of those willing to investigate the unknown.
              </p>
              <p className="text-[#202124] font-medium text-xl">
                Knowledge grows when it is questioned, documented, shared, and advanced.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-[#E8EAED]">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#5F6368] mb-6">Looking Ahead</p>

            <div className="space-y-8 text-lg leading-relaxed text-[#5F6368]">
              <p>The challenges facing society continue to evolve.</p>
              <p>So must the questions we ask.</p>
              <p>
                As Ré looks toward the future, its commitment remains unchanged:
              </p>
              <p>
                To cultivate researchers, strengthen research culture, build institutional memory, and create opportunities for inquiry that extend beyond disciplinary boundaries.
              </p>
              <p>
                Because every breakthrough begins long before the answer.
              </p>
            </div>

            <div className="pt-16">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
                It begins with the courage to ask a question.
              </h2>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
