import React, { Component } from 'react';
import DocumentationBox from '../Shared/DocumentationBox';

export default class Documentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-sm">
              <h2 className="title">Documentation</h2>
              <p className="subtitle">
                Aute laborum enim ex deserunt aute non commodo amet culpa ad.
                Excepteur quis ipsum elit eiusmod fugiat est anim.
              </p>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h3 className="text-primary">Initialisation</h3>
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Getting Started"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Importing"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Variables"
                subTitle="Coming soon..."
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h3 className="text-primary">Components</h3>
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/accordion"
                title="Accordion"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/alert"
                title="Alert"
                subTitle="This component is used to provide feedback messages for users."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/animation"
                title="Animation"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/box"
                title="Box"
                subTitle="This component is used as a basic container that full widths to
                any element it is within."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/breadcrumb"
                title="Breadcrumb"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/button"
                title="Button"
                subTitle="An essential component for any design, providing the user a simple way to trigger an event."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/card"
                title="Card"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/divider"
                title="Divider"
                subTitle="This component is used to visually separate content for the user."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/dropdown"
                title="Dropdown"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/field"
                title="Field"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/footer"
                title="Footer"
                subTitle="This component is widely used as a source of navigation on the
                bottom of webpages."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/hero"
                title="Hero"
                subTitle="A component which extends to the whole horizontal viewport,
                used to showcase key messaging."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/media"
                title="Media"
                subTitle="This component is used to create repetitive elements
                where content is positioned with some imagery."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/navbar"
                title="Navbar"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/pagination"
                title="Pagination"
                subTitle="This component is used to display grouped content existing
                between multiple pages."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/stat"
                title="Stat"
                subTitle="This component is used to empathise both the label and value for
                an attribute."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/tab"
                title="Tab"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/table"
                title="Table"
                subTitle="This component is used to spruce up the HTML table we all know
                and love."
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h3 className="text-primary">Layout</h3>
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Basic"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Grid"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Family grid"
                subTitle="Coming soon..."
              />
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h3 className="text-primary">Utilities</h3>
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Display"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Spacing"
                subTitle="Coming soon..."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Typography"
                subTitle="Coming soon..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
