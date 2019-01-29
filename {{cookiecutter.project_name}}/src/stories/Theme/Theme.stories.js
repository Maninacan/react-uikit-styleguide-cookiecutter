import React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme, withDocs } from "storybook-readme";

import ThemeReadme from "./README.md";
import ThemeContainer from "./ThemeContainer";
import Accordion from "./Accordion";
import Alert from "./Alert";
import Align from "./Align";
import Animation from "./Animation";
import Article from "./Article";
import Background from "./Background";
import Badge from "./Badge";
import Breadcrumb from "./Breadcrumb";
import Button from "./Button";
import Card from "./Card";
import Close from "./Close";
import Column from "./Column";
import Comment from "./Comment";
import Countdown from "./Countdown";
import Cover from "./Cover";
import DescriptionList from "./DescriptionList";
import Divider from "./Divider";
import Dotnav from "./Dotnav";
import Drop from "./Drop";
import Dropdown from "./Dropdown";
import Filter from "./Filter";
import Flex from "./Flex";
import Form from "./Form";
import Grid from "./Grid";
import Heading from "./Heading";
import Height from "./Height";
import Iconnav from "./Iconnav";
import Image from "./Image";
import Inverse from "./Inverse";
import Label from "./Label";
import Leader from "./Leader";
import Lightbox from "./Lightbox";
import Link from "./Link";
import List from "./List";
import Margin from "./Margin";
import Marker from "./Marker";
import Modal from "./Modal";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Notification from "./Notification";
import OffCanvas from "./OffCanvas";
import Overlay from "./Overlay";
import Padding from "./Padding";
import Pagination from "./Pagination";
import Parallax from "./Parallax";
import Placeholder from "./Placeholder";
import Position from "./Position";
import Progress from "./Progress";
import Search from "./Search";
import Section from "./Section";
import Slidenav from "./Slidenav";
import Slider from "./Slider";
import Slideshow from "./Slideshow";
import Sortable from "./Sortable";
import Spinner from "./Spinner";
import Sticky from "./Sticky";
import Subnav from "./Subnav";
import SVG from "./SVG";
import Switcher from "./Switcher";
import Tab from "./Tab";
import Table from "./Table";
import Text from "./Text";
import Thumbnav from "./Thumbnav";
import Tile from "./Tile";
import Toggle from "./Toggle";
import Tooltip from "./Tooltip";
import Totop from "./Totop";
import Transition from "./Transition";
import Upload from "./Upload";
import Utility from "./Utility";
import Video from "./Video";
import Visibility from "./Visibility";
import Width from "./Width";

const outerDivStyles = { textAlign: "left" };

storiesOf("UI Kit Xyngular Theme", module)
  .addDecorator(withReadme(ThemeReadme))
  .addDecorator(withDocs(ThemeReadme))
  .add("Accordion", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Accordion" contents={<Accordion />} />
    </div>
  ))
  .add("Alert", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Alert" contents={<Alert />} />
    </div>
  ))
  .add("Align", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Align" contents={<Align />} />
    </div>
  ))
  .add("Animation", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Animation" contents={<Animation />} />
    </div>
  ))
  .add("Article", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Article" contents={<Article />} />
    </div>
  ))
  .add("Background", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Background" contents={<Background />} />
    </div>
  ))
  .add("Badge", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Badge" contents={<Badge />} />
    </div>
  ))
  .add("Breadcrumb", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Breadcrumb" contents={<Breadcrumb />} />
    </div>
  ))
  .add("Button", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Button" contents={<Button />} />
    </div>
  ))
  .add("Card", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Card" contents={<Card />} />
    </div>
  ))
  .add("Close", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Close" contents={<Close />} />
    </div>
  ))
  .add("Column", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Column" contents={<Column />} />
    </div>
  ))
  .add("Comment", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Comment" contents={<Comment />} />
    </div>
  ))
  .add("Countdown", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Countdown" contents={<Countdown />} />
    </div>
  ))
  .add("Cover", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Cover" contents={<Cover />} />
    </div>
  ))
  .add("Description List", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Description List" contents={<DescriptionList />} />
    </div>
  ))
  .add("Divider", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Divider" contents={<Divider />} />
    </div>
  ))
  .add("Dotnav", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Dotnav" contents={<Dotnav />} />
    </div>
  ))
  .add("Drop", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Drop" contents={<Drop />} />
    </div>
  ))
  .add("Dropdown", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Dropdown" contents={<Dropdown />} />
    </div>
  ))
  .add("Filter", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Filter" contents={<Filter />} />
    </div>
  ))
  .add("Flex", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Flex" contents={<Flex />} />
    </div>
  ))
  .add("Form", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Form" contents={<Form />} />
    </div>
  ))
  .add("Grid", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Grid" contents={<Grid />} />
    </div>
  ))
  .add("Heading", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Heading" contents={<Heading />} />
    </div>
  ))
  .add("Height", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Height" contents={<Height />} />
    </div>
  ))
  .add("Iconnav", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Iconnav" contents={<Iconnav />} />
    </div>
  ))
  .add("Image", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Image" contents={<Image />} />
    </div>
  ))
  .add("Inverse", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Inverse" contents={<Inverse />} />
    </div>
  ))
  .add("Label", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Label" contents={<Label />} />
    </div>
  ))
  .add("Leader", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Leader" contents={<Leader />} />
    </div>
  ))
  .add("Lightbox", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Lightbox" contents={<Lightbox />} />
    </div>
  ))
  .add("Link", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Link" contents={<Link />} />
    </div>
  ))
  .add("List", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="List" contents={<List />} />
    </div>
  ))
  .add("Margin", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Margin" contents={<Margin />} />
    </div>
  ))
  .add("Marker", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Marker" contents={<Marker />} />
    </div>
  ))
  .add("Modal", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Modal" contents={<Modal />} />
    </div>
  ))
  .add("Nav", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Nav" contents={<Nav />} />
    </div>
  ))
  .add("Navbar", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Navbar" contents={<Navbar />} />
    </div>
  ))
  .add("Notification", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Notification" contents={<Notification />} />
    </div>
  ))
  .add("Off-canvas", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Off-canvas" contents={<OffCanvas />} />
    </div>
  ))
  .add("Overlay", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Overlay" contents={<Overlay />} />
    </div>
  ))
  .add("Padding", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Padding" contents={<Padding />} />
    </div>
  ))
  .add("Pagination", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Pagination" contents={<Pagination />} />
    </div>
  ))
  .add("Parallax", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Parallax" contents={<Parallax />} />
    </div>
  ))
  .add("Placeholder", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Placeholder" contents={<Placeholder />} />
    </div>
  ))
  .add("Position", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Position" contents={<Position />} />
    </div>
  ))
  .add("Progress", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Progress" contents={<Progress />} />
    </div>
  ))
  .add("Search", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Search" contents={<Search />} />
    </div>
  ))
  .add("Section", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Section" contents={<Section />} />
    </div>
  ))
  .add("Slidenav", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Slidenav" contents={<Slidenav />} />
    </div>
  ))
  .add("Slider", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Slider" contents={<Slider />} />
    </div>
  ))
  .add("Slideshow", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Slideshow" contents={<Slideshow />} />
    </div>
  ))
  .add("Sortable", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Sortable" contents={<Sortable />} />
    </div>
  ))
  .add("Spinner", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Spinner" contents={<Spinner />} />
    </div>
  ))
  .add("Sticky", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Sticky" contents={<Sticky />} />
    </div>
  ))
  .add("Subnav", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Subnav" contents={<Subnav />} />
    </div>
  ))
  .add("SVG", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="SVG" contents={<SVG />} />
    </div>
  ))
  .add("Switcher", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Switcher" contents={<Switcher />} />
    </div>
  ))
  .add("Tab", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Tab" contents={<Tab />} />
    </div>
  ))
  .add("Table", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Table" contents={<Table />} />
    </div>
  ))
  .add("Text", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Text" contents={<Text />} />
    </div>
  ))
  .add("Thumbnav", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Thumbnav" contents={<Thumbnav />} />
    </div>
  ))
  .add("Tile", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Tile" contents={<Tile />} />
    </div>
  ))
  .add("Toggle", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Toggle" contents={<Toggle />} />
    </div>
  ))
  .add("Tooltip", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Tooltip" contents={<Tooltip />} />
    </div>
  ))
  .add("Totop", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Totop" contents={<Totop />} />
    </div>
  ))
  .add("Transition", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Transition" contents={<Transition />} />
    </div>
  ))
  .add("Upload", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Upload" contents={<Upload />} />
    </div>
  ))
  .add("Utility", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Utility" contents={<Utility />} />
    </div>
  ))
  .add("Video", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Video" contents={<Video />} />
    </div>
  ))
  .add("Visibility", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Visibility" contents={<Visibility />} />
    </div>
  ))
  .add("Width", () => (
    <div style={outerDivStyles}>
      <ThemeContainer title="Width" contents={<Width />} />
    </div>
  ));
