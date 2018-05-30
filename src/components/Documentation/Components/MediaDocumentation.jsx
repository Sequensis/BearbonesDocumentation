import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class MediaDocumentation extends Component {
  render() {
    return (
      <div className="section p-t-0">
        <div className="container">
          <div className="bb-grid md">
            <div className="column column-16">
              <h2 className="title">Media</h2>
              <p className="subtitle">
                This component is used to create repetitive elements where
                content is positioned with some imagery, used widely for social
                media.
              </p>
              <Highlight className="js">
                {'import "../bearbones/sass/components/media/all"'}
              </Highlight>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Basic</h4>
              <div className="bb-box example full-x">
                <div className="doc-preview">
                  <div className="content">
                    <article className="media">
                      <div className="media-left">
                        <figure>
                          <img
                            src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div className="media-container">
                        <div className="media-content">
                          <p className="text-doc">
                            <strong>Paddington</strong>
                          </p>
                          <p className="text-doc">
                            Black bears are typically smaller than grizzly
                            bears, have a smaller shoulder hump, less shaggy
                            fur, longer ears, and a less concave facial profile.
                            Black bear claws are also smaller and more curved to
                            better climb trees.
                            <br />
                            <small>
                              <a className="link" href="#example">
                                Reply
                              </a>{' '}
                              - 2 hours ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<article class="media">
  <div class="media-left">
    <figure>
      <img src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+" alt="Placeholder"/>
    </figure>
  </div>
  <div class="media-container">
    <div class="media-content">
      <p><strong>Paddington</strong></p>
      <p>
        Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
        less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
        are also smaller and more curved to better climb trees.
        <br />
        <small><a class="link" href="#">Reply</a> - 2 hours ago</small>
      </p>
    </div>
  </div>
</article>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Nested</h4>
              <div className="bb-box example full-x">
                <div className="doc-preview">
                  <div className="content">
                    <article className="media">
                      <div className="media-left">
                        <figure>
                          <img
                            src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div className="media-container">
                        <div className="media-content">
                          <p className="text-doc">
                            <strong>Paddington</strong>
                          </p>
                          <p className="text-doc">
                            Black bears are typically smaller than grizzly
                            bears, have a smaller shoulder hump, less shaggy
                            fur, longer ears, and a less concave facial profile.
                            Black bear claws are also smaller and more curved to
                            better climb trees.
                            <br />
                            <small>
                              <a className="link" href="#example">
                                Reply
                              </a>{' '}
                              - 2 hours ago
                            </small>
                          </p>
                          <article className="media">
                            <div className="media-left">
                              <figure>
                                <img
                                  src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+"
                                  alt="Placeholder"
                                />
                              </figure>
                            </div>
                            <div className="media-container">
                              <div className="media-content">
                                <p className="text-doc">
                                  <strong>Paddington</strong>
                                </p>
                                <p className="text-doc">
                                  Black bears are typically smaller than grizzly
                                  bears, have a smaller shoulder hump, less
                                  shaggy fur, longer ears, and a less concave
                                  facial profile. Black bear claws are also
                                  smaller and more curved to better climb trees.
                                  <br />
                                  <small>
                                    <a className="link" href="#example">
                                      Reply
                                    </a>{' '}
                                    - 2 hours ago
                                  </small>
                                </p>
                                <article className="media">
                                  <div className="media-left">
                                    <figure>
                                      <img
                                        src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+"
                                        alt="Placeholder"
                                      />
                                    </figure>
                                  </div>
                                  <div className="media-container">
                                    <div className="media-content">
                                      <p className="text-doc">
                                        <strong>Paddington</strong>
                                      </p>
                                      <p className="text-doc">
                                        Black bears are typically smaller than
                                        grizzly bears, have a smaller shoulder
                                        hump, less shaggy fur, longer ears, and
                                        a less concave facial profile. Black
                                        bear claws are also smaller and more
                                        curved to better climb trees.
                                        <br />
                                        <small>
                                          <a className="link" href="#example">
                                            Reply
                                          </a>{' '}
                                          - 2 hours ago
                                        </small>
                                      </p>
                                    </div>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="doc-snippet hide">
                  <Highlight className="html">
                    {`<article class="media">
  <div class="media-left">
    <figure>
      <img src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+" alt="Placeholder"/>
    </figure>
  </div>
  <div class="media-container">
    <div class="media-content">
      <p><strong>Paddington</strong></p>
      <p>
        Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
        less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
        are also smaller and more curved to better climb trees.
        <br />
        <small><a class="link" href="#example">Reply</a> - 2 hours ago</small>
      </p>
      <article class="media">
        <div class="media-left">
          <figure>
            <img src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+" alt="Placeholder"/>
          </figure>
        </div>
        <div class="media-container">
          <div class="media-content">
            <p><strong>Paddington</strong></p>
            <p>
              Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
              less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
              are also smaller and more curved to better climb trees.
              <br />
              <small><a class="link" href="#example">Reply</a> - 2 hours ago</small>
            </p>
            <article class="media">
              <div class="media-left">
                <figure>
                  <img src="http://via.placeholder.com/48x48/24C2AB/ffffff?text=+" alt="Placeholder"/>
                </figure>
              </div>
              <div class="media-container">
                <div class="media-content">
                  <p><strong>Paddington</strong></p>
                  <p>
                    Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
                    less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
                    are also smaller and more curved to better climb trees.
                    <br />
                    <small><a class="link" href="#example">Reply</a> - 2 hours ago</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </article>
    </div>
  </div>
</article>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <h4 className="title">Alignment</h4>
              <div className="bb-box example full-x">
                <div className="doc-preview">
                  <div className="content">
                    <article className="media center">
                      <div className="media-left">
                        <figure>
                          <img
                            src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div className="media-container">
                        <div className="media-content">
                          <p className="text-doc">
                            <strong>Paddington</strong>
                          </p>
                          <p className="text-doc text-xl">
                            Black bears are typically smaller than grizzly
                            bears, have a smaller shoulder hump, less shaggy
                            fur, longer ears, and a less concave facial profile.
                            Black bear claws are also smaller and more curved to
                            better climb trees.
                            <br />
                            <small>
                              <a className="link" href="#example">
                                Reply
                              </a>{' '}
                              - 2 hours ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<article class="media center">
  <div class="media-container">
    <div class="media-left">
      <figure>
        <img src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+" alt="Placeholder"/>
      </figure>
    </div>  
    <div class="media-content">
      <p><strong>Paddington</strong></p>
      <p>
        Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
        less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
        are also smaller and more curved to better climb trees.
        <br />
        <small><a class="link" href="#">Reply</a> - 2 hours ago</small>
      </p>
    </div>
  </div>
</article>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <div className="bb-box example full-x">
                <div className="doc-preview">
                  <div className="content">
                    <article className="media bottom">
                      <div className="media-left">
                        <figure>
                          <img
                            src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div className="media-container">
                        <div className="media-content">
                          <p className="text-doc">
                            <strong>Paddington</strong>
                          </p>
                          <p className="text-doc text-xl">
                            Black bears are typically smaller than grizzly
                            bears, have a smaller shoulder hump, less shaggy
                            fur, longer ears, and a less concave facial profile.
                            Black bear claws are also smaller and more curved to
                            better climb trees.
                            <br />
                            <small>
                              <a className="link" href="#example">
                                Reply
                              </a>{' '}
                              - 2 hours ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<article class="media bottom">
  <div class="media-container">
    <div class="media-left">
      <figure>
        <img src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+" alt="Placeholder"/>
      </figure>
    </div>  
    <div class="media-content">
      <p><strong>Paddington</strong></p>
      <p>
        Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
        less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
        are also smaller and more curved to better climb trees.
        <br />
        <small><a class="link" href="#">Reply</a> - 2 hours ago</small>
      </p>
    </div>
  </div>
</article>`}
                  </Highlight>
                  <button className="bb-btn primary doc-copy sm">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-grid md">
            <div className="column column-16">
              <div className="bb-box example full-x">
                <div className="doc-preview">
                  <div className="content">
                    <article className="media">
                      <div className="media-container">
                        <div className="media-content">
                          <p className="text-doc">
                            <strong>Paddington</strong>
                          </p>
                          <p className="text-doc">
                            Black bears are typically smaller than grizzly
                            bears, have a smaller shoulder hump, less shaggy
                            fur, longer ears, and a less concave facial profile.
                            Black bear claws are also smaller and more curved to
                            better climb trees.
                            <br />
                            <small>
                              <a className="link" href="#example">
                                Reply
                              </a>{' '}
                              - 2 hours ago
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className="media-right">
                        <figure>
                          <img
                            src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="doc-snippet">
                  <Highlight className="html">
                    {`<article class="media">
  <div class="media-container">
    <div class="media-content">
      <p><strong>Paddington</strong></p>
      <p>
        Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, 
        less shaggy fur, longer ears, and a less concave facial profile. Black bear claws 
        are also smaller and more curved to better climb trees.
        <br />
        <small><a class="link" href="#">Reply</a> - 2 hours ago</small>
      </p>
    </div>
  </div>
  <div class="media-right">
    <figure>
      <img src="http://via.placeholder.com/64x64/24C2AB/ffffff?text=+" alt="Placeholder"/>
    </figure>
  </div>
</article>`}
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
