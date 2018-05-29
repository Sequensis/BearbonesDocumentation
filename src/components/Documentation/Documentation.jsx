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
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Importing"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Variables"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
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
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
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
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
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
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
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
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
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
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/field"
                title="Field"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/footer"
                title="Footer"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/hero"
                title="Hero"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/media"
                title="Media"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/navbar"
                title="Navbar"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/pagination"
                title="Pagination"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/stat"
                title="Stat"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/tab"
                title="Tab"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="components/table"
                title="Table"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
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
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Grid"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Family grid"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
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
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Spacing"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
            <div className="column one-third">
              <DocumentationBox
                link="example"
                title="Typography"
                subTitle="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus
                nec iaculis mauris."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
