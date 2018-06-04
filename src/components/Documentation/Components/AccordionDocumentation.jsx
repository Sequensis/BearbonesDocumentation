import React, { Component } from 'react';
import Highlight from 'react-highlight';
import { Accordion, AccordionItem } from '../../Shared/Accordion';
export default class AccordionDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h1 className="title">Accordion</h1>
              <p className="subtitle">
                This component is used to provide feedback messages for users.
              </p>
              <Highlight className="js">
                {'import "../bearbones/sass/components/accordion/all"'}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <p className="subtitle sm">
                As there is no js in Bearbones, you need to toggle the{' '}
                <code>.active</code> class on the element header and content you
                want to expand/collapse.
              </p>
              <div className="bb-box m-t-3 example">
                <div className="doc-preview">
                  <div className="content">
                    <Accordion>
                      <AccordionItem header={`Panda`}>
                        The giant panda lives in a few mountain ranges in
                        central China, mainly in Sichuan, but also in
                        neighbouring Shaanxi and Gansu. As a result of farming,
                        deforestation, and other development, the giant panda
                        has been driven out of the lowland areas where it once
                        lived.
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-accordion">
  <div class="header">
    Panda<span class="chevron"></span>
  </div>
  <div class="content">
    The giant panda lives in a few mountain ranges in central
    China, mainly in Sichuan, but also in neighbouring Shaanxi
    and Gansu. As a result of farming, deforestation, and
    other development, the giant panda has been driven out of
    the lowland areas where it once lived.
  </div>
</div>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Nested</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="bb-accordion">
                    <div className="header active">
                      Ursidae<span className="chevron" />
                    </div>
                    <div className="content active">
                      <div className="header active">
                        <span className="toggle" />Panda
                      </div>
                      <div className="content active">
                        The giant panda lives in a few mountain ranges in
                        central China, mainly in Sichuan, but also in
                        neighbouring Shaanxi and Gansu. As a result of farming,
                        deforestation, and other development, the giant panda
                        has been driven out of the lowland areas where it once
                        lived.
                      </div>

                      <div className="header">
                        <span className="toggle" />Brown Bear
                      </div>
                      <div className="content">...</div>

                      <div className="header">
                        <span className="toggle" />Sloth Bear
                      </div>
                      <div className="content">...</div>
                    </div>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-accordion">
  <div class="header">
    Ursidae<span class="chevron"></>
  </div>
  <div class="content">
    <div class="header">
      <span class="toggle"></span>Panda
    </div>
    <div class="content">
      The giant panda lives in a few mountain ranges in
      central China, mainly in Sichuan, but also in
      neighbouring Shaanxi and Gansu. As a result of farming,
      deforestation, and other development, the giant panda
      has been driven out of the lowland areas where it once
      lived.
    </div>
    <div class="header">
      <span class="toggle"></span>Brown Bear
    </div>
    <div class="content">
      ...
    </div>
    <div class="header">
      <span class="toggle"></span>Sloth Bear
    </div>
    <div class="content">
      ...
    </div>
  </div>
</div>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Colours</h4>
              <div className="bb-box example">
                <div className="doc-preview">
                  <div className="content m-b-3">
                    <Accordion className="primary">
                      <AccordionItem header={`Primary`}>
                        The giant panda lives in a few mountain ranges in
                        central China, mainly in Sichuan, but also in
                        neighbouring Shaanxi and Gansu. As a result of farming,
                        deforestation, and other development, the giant panda
                        has been driven out of the lowland areas where it once
                        lived.
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="content m-b-3">
                    <Accordion className="secondary">
                      <AccordionItem header={`Secondary`}>
                        The giant panda lives in a few mountain ranges in
                        central China, mainly in Sichuan, but also in
                        neighbouring Shaanxi and Gansu. As a result of farming,
                        deforestation, and other development, the giant panda
                        has been driven out of the lowland areas where it once
                        lived.
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="content m-b-3">
                    <Accordion className="positive">
                      <AccordionItem header={`Positive`}>
                        The giant panda lives in a few mountain ranges in
                        central China, mainly in Sichuan, but also in
                        neighbouring Shaanxi and Gansu. As a result of farming,
                        deforestation, and other development, the giant panda
                        has been driven out of the lowland areas where it once
                        lived.
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="content m-b-3">
                    <Accordion className="negative">
                      <AccordionItem header={`Negative`}>
                        The giant panda lives in a few mountain ranges in
                        central China, mainly in Sichuan, but also in
                        neighbouring Shaanxi and Gansu. As a result of farming,
                        deforestation, and other development, the giant panda
                        has been driven out of the lowland areas where it once
                        lived.
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="content m-b-3">
                    <Accordion className="invert">
                      <AccordionItem header={`Invert`}>
                        The giant panda lives in a few mountain ranges in
                        central China, mainly in Sichuan, but also in
                        neighbouring Shaanxi and Gansu. As a result of farming,
                        deforestation, and other development, the giant panda
                        has been driven out of the lowland areas where it once
                        lived.
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<div class="bb-accordion primary">
  <div class="header">
    Panda<span class="chevron"></span>
  </div>
  <div class="content">
    The giant panda lives in a few mountain ranges in central
    China, mainly in Sichuan, but also in neighbouring Shaanxi
    and Gansu. As a result of farming, deforestation, and
    other development, the giant panda has been driven out of
    the lowland areas where it once lived.
  </div>
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-accordion secondary">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-accordion positive">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-accordion negative">
  ...
</div>`}
                  </Highlight>
                  <Highlight className="html">
                    {`<div class="bb-accordion invert">
  ...
</div>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
