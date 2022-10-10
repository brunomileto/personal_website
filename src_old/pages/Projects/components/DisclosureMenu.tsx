import { useState } from 'react';
import ArrowRightSFillIcon from 'remixicon-react/ArrowRightSFillIcon';
import CheckFillIcon from 'remixicon-react/CheckFillIcon';

import { Disclosure } from '@headlessui/react';
import * as Checkbox from '@radix-ui/react-checkbox';

import { ProjectType } from '../';

interface Props {
  projetcTypes: ProjectType[];
  onSelectedType: (selectedType: ProjectType) => void;
}

export function DisclosureMenu({ onSelectedType, projetcTypes }: Props) {
  return (
    <Disclosure>
      {({ open }) => {
        return (
          <>
            <Disclosure.Button
              className={`px-7 md:px-0 md:pl-2 md:py-2 py-1 bg-lines 
            md:bg-transparent w-full flex flex-row gap-[2px] items-center 
            md:border-b-1 md:border-t-1 md:border-lines 
            md:text-sm `}
            >
              <ArrowRightSFillIcon
                size={20}
                className={
                  open
                    ? "rotate-90 transform transition-transform duration-300"
                    : ""
                }
              />
              <span className=" text-secondary-white">projects</span>
            </Disclosure.Button>
            <Disclosure.Panel
              className="flex flex-col pl-9 md:pl-4 mt-3 mb-4 
                      gap-2 md:gap-2"
            >
              <div className="flex flex-col gap-4">
                {projetcTypes.map((projectType) => {
                  return (
                    <div
                      key={projectType.type}
                      className="text-sm md:text-xs flex md:w-fit flex-row 
                                    items-center gap-6 md:gap-4"
                    >
                      <Checkbox.Root
                        checked={projectType.isSelected}
                        name={projectType.type}
                        id={projectType.type}
                        onCheckedChange={() => onSelectedType(projectType)}
                        className="bg-transparent border-1 border-secondary-sky 
                                              w-5 h-5 rounded-sm md:w-4 md:h-4"
                      >
                        <Checkbox.Indicator
                          className="flex items-center justify-center p-0
                                text-secondary-white focus:bg-secondary-sky"
                        >
                          <CheckFillIcon className="w-fit h-fit" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <label
                        htmlFor={projectType.type}
                        className="flex gap-2 items-center"
                      >
                        <projectType.icon
                          size={18}
                          className={`${
                            projectType.isSelected
                              ? "text-secondary-sky"
                              : "text-secondary-sky/50"
                          }`}
                        />
                        <span
                          className={`${
                            projectType.isSelected
                              ? "text-white"
                              : "text-secondary-sky"
                          }`}
                        >
                          {projectType.type}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
}
