import classNames from "classnames";
import { CiUser, CiHeart } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Nav_logo from "../public/images/myntra_logo.png";

const navigation = [
  { name: "MEN", href: "#", current: true },
  { name: "WOMEN", href: "#", current: false },
  { name: "KIDS", href: "#", current: false },
  { name: "HOME", href: "#", current: false },
  { name: "BEAUTY", href: "#", current: false },
  { name: "GENZ", href: "#", current: false },
  { name: "STUDIO", href: "#", current: false },
];

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Left Section: Logo & Menu Button */}
              <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <div className="sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 focus:outline-none">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>

                {/* Logo */}
                <div className="flex-shrink-0">
                  <img src={Nav_logo} alt="Logo" className="h-12 w-auto" />
                </div>

                {/* Navigation Links (Desktop only) */}
                <div className="hidden md:flex md:space-x-4">
                  {navigation.map((item, index) => {
                    const isLast = index === navigation.length - 1;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="relative px-2 py-2  rounded-md text-decoration-none"
                      >
                        <li className="list-unstyled text-sm font-bold text-gray-700 hover:bg-gray-700 hover:text-white"> {item.name}</li>
                        {isLast && (
                          <span className="absolute top-0 right-[-16px] inline-flex items-center justify-center px-2 text-xs font-semibold text-red-600">
                            New
                          </span>
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Search Input (Desktop only) */}
              <div className="hidden md:flex flex-1 justify-center lg:justify-start ml-4">
                <NavigationInput />
              </div>

              {/* Right Icons */}
              <div className="flex items-center gap-4">
                <IconWithLabel
                  icon={<CiUser className="text-xl" />}
                  label="Profile"
                />
                <IconWithLabel
                  icon={<CiHeart className="text-xl" />}
                  label="Wishlist"
                />
                <IconWithLabel
                  icon={<FaBagShopping className="text-xl" />}
                  label="Bag"
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileView />
        </>
      )}
    </Disclosure>
  );
};

const IconWithLabel = ({ icon, label }) => (
  <div className="flex flex-col items-center text-black text-xs font-semibold">
    {icon}
    <span>{label}</span>
  </div>
);

const NavigationInput = () => (
  <div className="w-full max-w-md">
    <div className="flex items-center rounded-md bg-gray-100 px-2 py-1">
      <MdOutlineSearch className="text-gray-500 text-lg" />
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="ml-2 w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-500 focus:outline-none"
      />
    </div>
  </div>
);

const MobileView = () => (
  <DisclosurePanel className="md:hidden">
    <div className="space-y-1 px-2 pt-2 pb-3">
      {navigation.map((item, index) => {
        const isLast = index === navigation.length - 1;
        return (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:bg-gray-200 hover:text-black",
              "block rounded-md px-3 py-2 text-base font-medium relative"
            )}
          >
            {item.name}
            {isLast && (
              <span className="absolute top-0 right-[-10px] inline-flex items-center justify-center px-2 text-xs font-semibold text-red-600">
                New
              </span>
            )}
          </DisclosureButton>
        );
      })}
      {/* Search in mobile */}
      <div className="mt-3 px-2">
        <NavigationInput />
      </div>
    </div>
  </DisclosurePanel>
);

export default NavBar;
