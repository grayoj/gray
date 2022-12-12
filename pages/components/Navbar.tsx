import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBar,
  CursorClick,
  DocumentReport,
  Menu,
  Refresh,
  ShieldCheck,
  ViewGrid,
  X,
} from "heroicons-react";
import { ChevronDown } from "heroicons-react";
import Link from "next/link";

const resources = [
  {
    name: "Software Engineering",
    description:
      "Distributed Systems, Docker, Typescript and Cool software I build, I am building and I have built.",
    href: "#",
  },
  {
    name: "Hardware",
    description: "Wires, electricity, motherboards and PCBS baby!",
    href: "#",
  },
  {
    name: "Machine Learning",
    description:
      "Do you like AI, Statistics, Computer Vision? I love that too.",
    href: "#",
  },
  {
    name: "Consultancy",
    description:
      "I provide consultancy services within the field of computer science.",
    href: "#",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className='relative bg-white'>
      <div className='flex justify-between items-center px-4 sm:px-6 md:justify-start md:space-x-10 mb-7'>
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <a href='#'>
            <span className='sr-only'>Workflow</span>
            <h1 className='font-signature text-xl'>Gray.</h1>
          </a>
        </div>
        <div className='-mr-2 -my-2 md:hidden'>
          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            <Menu className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <Popover.Group as='nav' className='hidden md:flex space-x-10'>
          <Link
            href='/'
            className='text-base font-medium text-gray-500 hover:text-gray-900'
          >
            Explore
          </Link>
          <Link
            href='../explore/about'
            className='text-base font-medium text-gray-500 hover:text-gray-900'
          >
            About
          </Link>
          <Link
            href='../newsroom/blog'
            className='text-base font-medium text-gray-500 hover:text-gray-900'
          >
            Blog
          </Link>

          <Link
            href='/contact'
            className='text-base font-medium text-gray-500 hover:text-gray-900'
          >
            Contact
          </Link>

          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
                  )}
                >
                  <span>Discover</span>
                  <ChevronDown
                    className={classNames(
                      open ? "text-gray-600" : "text-gray-400",
                      "ml-2 h-5 w-5 group-hover:text-gray-500"
                    )}
                    aria-hidden='true'
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0'>
                    <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                      <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                        {resources.map((resource) => (
                          <a
                            key={resource.name}
                            href={resource.href}
                            className='-m-3 p-3 block rounded-md hover:bg-gray-50'
                          >
                            <p className='text-base font-medium text-gray-900'>
                              {resource.name}
                            </p>
                            <p className='mt-1 text-sm text-gray-500'>
                              {resource.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <a
            href='#'
            className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
          >
            Sign in
          </a>
          <a
            href='#'
            className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-zinc-800 hover:text-black hover:bg-white hover:border-zinc-800'
          >
            Create Account
          </a>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <h1 className='font-signature text-xl'>Gray.</h1>
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none '>
                    <span className='sr-only'>Close menu</span>
                    <X className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'></div>
            </div>
            <div className='py-6 px-5'>
              <div className='grid grid-cols-2 gap-4'>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Explore
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  About
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Blog
                </a>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Contact
                </a>
                {resources.map((resource) => (
                  <a
                    key={resources["name"]}
                    href={resource.href}
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              <div className='mt-6'>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-zinc-800 hover:bg-white hover:text-black hover:border-zinc-800'
                >
                  Create Account
                </a>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Already a member of my site?{" "}
                  <a href='#' className='text-zinc-800 hover:text-zinc-800'>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
