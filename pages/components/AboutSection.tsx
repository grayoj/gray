/* This example requires Tailwind CSS v2.0+ */
import {
  Server,
  Briefcase,
  Code,
  DeviceMobile,
  Chip,
  BookOpen,
} from "heroicons-react";

const features = [
  {
    name: "Backend & Platform Engineering",
    description:
      "I am proficient with designing and building RESTful APIs, configuring CI/CD pipelines, unit-testing, distributed systems, and database management.",
    icon: Server,
  },
  {
    name: "Consultancy",
    description:
      "I help companies, institutions and organisations scale, grow ideas, and implement proper solutions",
    icon: Briefcase,
  },
  {
    name: "Frontend Engineering",
    description:
      "I can effectively translate UI/UX product designs into readable, quality source code in HTML, CSS, Vanilla JavaScript and React JS.",
    icon: Code,
  },
  {
    name: "Mobile Applications",
    description:
      "Experienced in writing native code for the android platform in Kotlin. I have worked with Flutter and React Native to develop cross platform solutions.",
    icon: DeviceMobile,
  },
  {
    name: "Machine Learning",
    description:
      "Eager to improve. But anyways, I have hands on experience with writing production ready Machine Learning code with SKLearn, Python and Tensorflow.",
    icon: Chip,
  },
  {
    name: "Tutoring",
    description:
      "I've trained and lectured the engineering staff of massive parastatals, university students, software engineers, with solid academic credentials",
    icon: BookOpen,
  },
];

export default function AboutSection() {
  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Skillsets
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            I have been able to gather some pretty good skills over the course
            of ten years, involved in active programming. This, despite the fact
            that my first industry experience began six years ago.
          </p>
        </div>

        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {features.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-full bg-zinc-800 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
