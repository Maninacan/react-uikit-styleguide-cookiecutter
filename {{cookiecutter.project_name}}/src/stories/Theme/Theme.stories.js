import React from "react"
import { storiesOf } from "@storybook/react"
import { withReadme, withDocs } from "storybook-readme"

import ThemeReadme from "./README.md"
import ThemeContainer from "./ThemeContainer"
import Accordion from "./Accordion"
import Alert from "./Alert"
import Align from "./Align"
import Animation from "./Animation"
import Article from "./Article"
import Background from "./Background"
import Badge from "./Badge"
import Breadcrumb from "./Breadcrumb"
import Button from "./Button"
import Card from "./Card"
import Close from "./Close"
import Column from "./Column"
import Comment from "./Comment"
import Container from "./Container"
import Countdown from "./Countdown"
import Cover from "./Cover"
//import DescriptionList from './DescriptionList';
//import Divider from './Divider';
//import Dotnav from './Dotnav';
//import Drop from './Drop';
//import Dropdown from './Dropdown';
//import Filter from './Filter';
//import Flex from './Flex';
//import Form from './Form';
//import Grid from './Grid';
//import Heading from './Heading';
//import Height from './Height';
//import Icon from './Icon';
//import Iconnav from './Iconnav';
//import Image from './Image';
//import Inverse from './Inverse';
//import Label from './Label';
//import Leader from './Leader';
//import Lightbox from './Lightbox';
//import Link from './Link';
//import List from './List';
//import Margin from './Margin';
//import Marker from './Marker';
//import Modal from './Modal';
//import Nav from './Nav';
//import Navbar from './Navbar';
//import Notification from './Notification';
//import OffCanvas from './OffCanvas';
//import Overlay from './Overlay';
//import Padding from './Padding';
//import Pagination from './Pagination';
//import Parallax from './Parallax';
//import Placeholder from './Placeholder';
//import Position from './Position';
//import Print from './Print';
//import Progress from './Progress';
//import Scroll from './Scroll';
//import Scrollspy from './Scrollspy';
//import Search from './Search';
//import Section from './Section';
//import Slidenav from './Slidenav';
//import Slider from './Slider';
//import Slideshow from './Slideshow';
//import Sortable from './Sortable';
//import Spinner from './Spinner';
//import Sticky from './Sticky';
//import Subnav from './Subnav';
//import SVG from './SVG';
//import Switcher from './Switcher';
//import Tab from './Tab';
//import Table from './Table';
//import Text from './Text';
//import Thumbnav from './Thumbnav';
//import Tile from './Tile';
//import Toggle from './Toggle';
//import Tooltip from './Tooltip';
//import Totop from './Totop';
//import Transition from './Transition';
//import Upload from './Upload';
//import Utility from './Utility';
//import Video from './Video';
//import Visibility from './Visibility';
//import Width from './Width';

const outerDivStyles = { textAlign: "left" }

storiesOf("UI Kit Xyngular Theme", module)
  .addDecorator(withReadme(ThemeReadme))
  .addDecorator(withDocs(ThemeReadme))
  .add("Components", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Accordion" contents={<Accordion />} />
      <ThemeContainer title="Alert" contents={<Alert />} />
      <ThemeContainer title="Align" contents={<Align />} />
      <ThemeContainer title="Animation" contents={<Animation />} />
      <ThemeContainer title="Article" contents={<Article />} />
      <ThemeContainer title="Background" contents={<Background />} />
      <ThemeContainer title="Badge" contents={<Badge />} />
      <ThemeContainer title="Breadcrumb" contents={<Breadcrumb />} />
      <ThemeContainer title="Button" contents={<Button />} />
      <ThemeContainer title="Card" contents={<Card />} />
      <ThemeContainer title="Close" contents={<Close />} />
      <ThemeContainer title="Column" contents={<Column />} />
      <ThemeContainer title="Comment" contents={<Comment />} />
      <ThemeContainer title="Container" contents={<Container />} />
      <ThemeContainer title="Countdown" contents={<Countdown />} />
      <ThemeContainer title="Cover" contents={<Cover />} />
      <ThemeContainer
        title="Description List"
        contents={<div>Description List</div>}
      />
      <ThemeContainer title="Divider" contents={<div>Divider</div>} />
      <ThemeContainer title="Dotnav" contents={<div>Dotnav</div>} />
      <ThemeContainer title="Drop" contents={<div>Drop</div>} />
      <ThemeContainer title="Dropdown" contents={<div>Dropdown</div>} />
      <ThemeContainer title="Filter" contents={<div>Filter</div>} />
      <ThemeContainer title="Flex" contents={<div>Flex</div>} />
      <ThemeContainer title="Form" contents={<div>Form</div>} />
      <ThemeContainer title="Grid" contents={<div>Grid</div>} />
      <ThemeContainer title="Heading" contents={<div>Heading</div>} />
      <ThemeContainer title="Height" contents={<div>Height</div>} />
      <ThemeContainer title="Icon" contents={<div>Icon</div>} />
      <ThemeContainer title="Iconnav" contents={<div>Iconnav</div>} />
      <ThemeContainer title="Image" contents={<div>Image</div>} />
      <ThemeContainer title="Inverse" contents={<div>Inverse</div>} />
      <ThemeContainer title="Label" contents={<div>Label</div>} />
      <ThemeContainer title="Leader" contents={<div>Leader</div>} />
      <ThemeContainer title="Lightbox" contents={<div>Lightbox</div>} />
      <ThemeContainer title="Link" contents={<div>Link</div>} />
      <ThemeContainer title="List" contents={<div>List</div>} />
      <ThemeContainer title="Margin" contents={<div>Margin</div>} />
      <ThemeContainer title="Marker" contents={<div>Marker</div>} />
      <ThemeContainer title="Modal" contents={<div>Modal</div>} />
      <ThemeContainer title="Nav" contents={<div>Nav</div>} />
      <ThemeContainer title="Navbar" contents={<div>Navbar</div>} />
      <ThemeContainer title="Notification" contents={<div>Notification</div>} />
      <ThemeContainer title="Off-canvas" contents={<div>Off-canvas</div>} />
      <ThemeContainer title="Overlay" contents={<div>Overlay</div>} />
      <ThemeContainer title="Padding" contents={<div>Padding</div>} />
      <ThemeContainer title="Pagination" contents={<div>Pagination</div>} />
      <ThemeContainer title="Parallax" contents={<div>Parallax</div>} />
      <ThemeContainer title="Placeholder" contents={<div>Placeholder</div>} />
      <ThemeContainer title="Position" contents={<div>Position</div>} />
      <ThemeContainer title="Print" contents={<div>Print</div>} />
      <ThemeContainer title="Progress" contents={<div>Progress</div>} />
      <ThemeContainer title="Scroll" contents={<div>Scroll</div>} />
      <ThemeContainer title="Scrollspy" contents={<div>Scrollspy</div>} />
      <ThemeContainer title="Search" contents={<div>Search</div>} />
      <ThemeContainer title="Section" contents={<div>Section</div>} />
      <ThemeContainer title="Slidenav" contents={<div>Slidenav</div>} />
      <ThemeContainer title="Slider" contents={<div>Slider</div>} />
      <ThemeContainer title="Slideshow" contents={<div>Slideshow</div>} />
      <ThemeContainer title="Sortable" contents={<div>Sortable</div>} />
      <ThemeContainer title="Spinner" contents={<div>Spinner</div>} />
      <ThemeContainer title="Sticky" contents={<div>Sticky</div>} />
      <ThemeContainer title="Subnav" contents={<div>Subnav</div>} />
      <ThemeContainer title="SVG" contents={<div>SVG</div>} />
      <ThemeContainer title="Switcher" contents={<div>Switcher</div>} />
      <ThemeContainer title="Tab" contents={<div>Tab</div>} />
      <ThemeContainer title="Table" contents={<div>Table</div>} />
      <ThemeContainer title="Text" contents={<div>Text</div>} />
      <ThemeContainer title="Thumbnav" contents={<div>Thumbnav</div>} />
      <ThemeContainer title="Tile" contents={<div>Tile</div>} />
      <ThemeContainer title="Toggle" contents={<div>Toggle</div>} />
      <ThemeContainer title="Tooltip" contents={<div>Tooltip</div>} />
      <ThemeContainer title="Totop" contents={<div>Totop</div>} />
      <ThemeContainer title="Transition" contents={<div>Transition</div>} />
      <ThemeContainer title="Upload" contents={<div>Upload</div>} />
      <ThemeContainer title="Utility" contents={<div>Utility</div>} />
      <ThemeContainer title="Video" contents={<div>Video</div>} />
      <ThemeContainer title="Visibility" contents={<div>Visibility</div>} />
      <ThemeContainer title="Width" contents={<div>Width</div>} />
    </div>
  ))
