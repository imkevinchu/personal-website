import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Medisure.ai',
    description:
      'GPT-3 robo-lawyer for health insurance claim denials (Columbia Venture Competition SEAS Tech Challenge 2021 finalists)',
    link: { href: '#', label: 'github.com' },
  },
  {
    name: 'Photo#',
    description:
      'Scripting language for command line interface photo editing (OCaml LLVM, C compiler and function library, Python parser/lexer)',
    link: { href: '#', label: 'github.com' },
  },
  {
    name: 'IDEO CoLab Makeathon',
    description:
      'Developed an Oculus Go virtual reality prototype enabling patients and loved ones to exchange virtual reality rich “voicemails”',
    link: { href: '#', label: 'github.com' },
  },
  {
    name: 'Mochi',
    description:
      'Slack Slackathon winner ($5000 prize): Slackbot enabling real-time feedback capture for Slack teams and communities (Node.js, Slack API)',
    link: { href: '#', label: 'github.com' },
  },
  {
    name: 'CollegeWalk',
    description:
      'Matching prospective and current college students for authentic college tour experiences (Columbia Venture Competition finalists)',
    link: { href: '#', label: 'github.com' },
  },
  {
    name: 'Pulse@CU',
    description:
      'Event and club discovery platform for the Columbia community, acquired 1,200+ users (Meteor.js, Heroku, Python web scraping)',
    link: { href: '#', label: 'github.com' },
  },
  {
    name: 'Asobo',
    description:
      '3D-printed Arduino robot toy for alerting against and preventing vehicle heatstroke fatalities. Created with an international team in Paris at Ècole Polytechnique.',
    link: { href: '#', label: 'github.com' },
  },
  {
    name: 'WanderWaze',
    description:
      'Tinder meets Google Trips for travel: Swipe to find the perfect itinerary. Finalist for Twitter-hosted hackathon.',
    link: { href: '#', label: 'github.com' },
  },
  {
    name: 'Recipify',
    description:
      'Using the Clarifai computer vision API to identify a plate of food and search for matching recipes with the Spooncacular food API (HackNY 2016)',
    link: { href: '#', label: 'github.com' },
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Kevin Chu</title>
        <meta name="description" content="Things I’ve had fun making" />
      </Head>
      <SimpleLayout
        title="Things I’ve had fun making"
        intro={`I've always liked to build things. From learning how to make Flash animations and games as a kid, competing in FIRST Robotics ("the varsity sport for the mind") and creating a literary zine in high school, to launching side projects and participating in the hackathon circuit as a college student, I've always felt the need to be up to something.`}
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link
                  href={
                    project.link.href !== '#'
                      ? project.link.href
                      : 'javascript:'
                  }
                >
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              {project.link.href !== '#' && (
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              )}
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
