import { Fragment } from "react";
import PropTypes from "prop-types";
import { Popover, Transition } from "@headlessui/react";
import arrowSrc from "../style/images/icon-arrow-dark.svg";

const NavItem = ({ title, items }) => {
  return (
    <Popover as="li">
      {({ open }) => (
        <>
          <Popover.Button
            as="div"
            className={`${
              open ? "text-slate-500" : ""
            } flex cursor-pointer items-center justify-center space-x-2 transition-colors duration-300`}
          >
            <h3>{title}</h3>
            <img
              src={arrowSrc}
              alt="arrow"
              className={`${
                open ? "-rotate-180" : ""
              } transition-all duration-300`}
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition-all ease-in duration-300"
            enterFrom="max-h-0 py-0"
            enterTo=" max-h-32 py-4"
            entered="py-4"
            leave="transition-all ease-out duration-300"
            leaveFrom="max-h-32 "
            leaveTo="max-h-0"
          >
            <Popover.Panel
              className={`space-y-2 overflow-clip rounded-md bg-slate-200 ${
                open ? "py-4" : ""
              }`}
            >
              {items.map((item, index) => (
                <a className="block cursor-pointer" key={index}>
                  {item}
                </a>
              ))}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
};

NavItem.defaultProps = {
  title: "Title Gereklidir",
  items: [],
};

export default NavItem;
