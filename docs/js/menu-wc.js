'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Sunbird Discussion UI Documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ComponentsModule-5e542baea2b69d21f10b687d5c558e3c631125484ae1965cd669cc010a231bfb4c087e6614eb881b9d85839f6dc8ad9520d62f337042e6b0850b93565281f3a2"' : 'data-bs-target="#xs-components-links-module-ComponentsModule-5e542baea2b69d21f10b687d5c558e3c631125484ae1965cd669cc010a231bfb4c087e6614eb881b9d85839f6dc8ad9520d62f337042e6b0850b93565281f3a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-5e542baea2b69d21f10b687d5c558e3c631125484ae1965cd669cc010a231bfb4c087e6614eb881b9d85839f6dc8ad9520d62f337042e6b0850b93565281f3a2"' :
                                            'id="xs-components-links-module-ComponentsModule-5e542baea2b69d21f10b687d5c558e3c631125484ae1965cd669cc010a231bfb4c087e6614eb881b9d85839f6dc8ad9520d62f337042e6b0850b93565281f3a2"' }>
                                            <li class="link">
                                                <a href="components/DiscussAllComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussAllComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiscussCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiscussHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiscussStartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussStartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiscussTagsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussTagsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiscussionDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussionDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyDiscussionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyDiscussionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidePannelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidePannelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagAllDiscussionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagAllDiscussionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingTagsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingTagsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ComponentsModule-5e542baea2b69d21f10b687d5c558e3c631125484ae1965cd669cc010a231bfb4c087e6614eb881b9d85839f6dc8ad9520d62f337042e6b0850b93565281f3a2"' : 'data-bs-target="#xs-injectables-links-module-ComponentsModule-5e542baea2b69d21f10b687d5c558e3c631125484ae1965cd669cc010a231bfb4c087e6614eb881b9d85839f6dc8ad9520d62f337042e6b0850b93565281f3a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ComponentsModule-5e542baea2b69d21f10b687d5c558e3c631125484ae1965cd669cc010a231bfb4c087e6614eb881b9d85839f6dc8ad9520d62f337042e6b0850b93565281f3a2"' :
                                        'id="xs-injectables-links-module-ComponentsModule-5e542baea2b69d21f10b687d5c558e3c631125484ae1965cd669cc010a231bfb4c087e6614eb881b9d85839f6dc8ad9520d62f337042e6b0850b93565281f3a2"' }>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DiscussionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DiscussionRoutingModule.html" data-type="entity-link" >DiscussionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DiscussionUiModule.html" data-type="entity-link" >DiscussionUiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DiscussionUiModule-24789932c4f1b6cedfb98081149f89e172c20cd62d252151a3cd81378221214bc08241936baf3aee44dc518d7b9788203db173405140779632089f51300eed3c"' : 'data-bs-target="#xs-components-links-module-DiscussionUiModule-24789932c4f1b6cedfb98081149f89e172c20cd62d252151a3cd81378221214bc08241936baf3aee44dc518d7b9788203db173405140779632089f51300eed3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DiscussionUiModule-24789932c4f1b6cedfb98081149f89e172c20cd62d252151a3cd81378221214bc08241936baf3aee44dc518d7b9788203db173405140779632089f51300eed3c"' :
                                            'id="xs-components-links-module-DiscussionUiModule-24789932c4f1b6cedfb98081149f89e172c20cd62d252151a3cd81378221214bc08241936baf3aee44dc518d7b9788203db173405140779632089f51300eed3c"' }>
                                            <li class="link">
                                                <a href="components/BaseWrapperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseWrapperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LibEntryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LibEntryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagsWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DiscussionUiModule-24789932c4f1b6cedfb98081149f89e172c20cd62d252151a3cd81378221214bc08241936baf3aee44dc518d7b9788203db173405140779632089f51300eed3c"' : 'data-bs-target="#xs-injectables-links-module-DiscussionUiModule-24789932c4f1b6cedfb98081149f89e172c20cd62d252151a3cd81378221214bc08241936baf3aee44dc518d7b9788203db173405140779632089f51300eed3c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DiscussionUiModule-24789932c4f1b6cedfb98081149f89e172c20cd62d252151a3cd81378221214bc08241936baf3aee44dc518d7b9788203db173405140779632089f51300eed3c"' :
                                        'id="xs-injectables-links-module-DiscussionUiModule-24789932c4f1b6cedfb98081149f89e172c20cd62d252151a3cd81378221214bc08241936baf3aee44dc518d7b9788203db173405140779632089f51300eed3c"' }>
                                        <li class="link">
                                            <a href="injectables/DiscussionEventsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussionEventsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TelemetryUtilsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryUtilsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ElementsModule.html" data-type="entity-link" >ElementsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ElementsModule-413740fe5f814507b41d2e6f8622abe08894e557ed41d1d6e4ee7a5b5f2fa7a17f837c77d57e4b13254526331349b8a6a495366fed654e6eae214d890245625e"' : 'data-bs-target="#xs-components-links-module-ElementsModule-413740fe5f814507b41d2e6f8622abe08894e557ed41d1d6e4ee7a5b5f2fa7a17f837c77d57e4b13254526331349b8a6a495366fed654e6eae214d890245625e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ElementsModule-413740fe5f814507b41d2e6f8622abe08894e557ed41d1d6e4ee7a5b5f2fa7a17f837c77d57e4b13254526331349b8a6a495366fed654e6eae214d890245625e"' :
                                            'id="xs-components-links-module-ElementsModule-413740fe5f814507b41d2e6f8622abe08894e557ed41d1d6e4ee7a5b5f2fa7a17f837c77d57e4b13254526331349b8a6a495366fed654e6eae214d890245625e"' }>
                                            <li class="link">
                                                <a href="components/AppLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AvatarPhotoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarPhotoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiscussCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadAlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadAlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostReplyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostReplyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RelatedDiscussionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RelatedDiscussionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SlidersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlidersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-PipesModule-db892f828ad40afd968eaee4c563fd902ae44222426478b66637b82aa382e2c16300115893cba428f79b9a1fdd053e064a568eaf6fb5ecc1861209eee35a0de7"' : 'data-bs-target="#xs-pipes-links-module-PipesModule-db892f828ad40afd968eaee4c563fd902ae44222426478b66637b82aa382e2c16300115893cba428f79b9a1fdd053e064a568eaf6fb5ecc1861209eee35a0de7"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-db892f828ad40afd968eaee4c563fd902ae44222426478b66637b82aa382e2c16300115893cba428f79b9a1fdd053e064a568eaf6fb5ecc1861209eee35a0de7"' :
                                            'id="xs-pipes-links-module-PipesModule-db892f828ad40afd968eaee4c563fd902ae44222426478b66637b82aa382e2c16300115893cba428f79b9a1fdd053e064a568eaf6fb5ecc1861209eee35a0de7"' }>
                                            <li class="link">
                                                <a href="pipes/PipeFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PipeFilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PipeListFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PipeListFilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PipeRelativeTimePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PipeRelativeTimePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SortByPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SortByPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SplitInitialsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplitInitialsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractConfigService.html" data-type="entity-link" >AbstractConfigService</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DiscussUtilsService.html" data-type="entity-link" >DiscussUtilsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventsService.html" data-type="entity-link" >EventsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationServiceService.html" data-type="entity-link" >NavigationServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterServiceService.html" data-type="entity-link" >RouterServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WrapperNavigateService.html" data-type="entity-link" >WrapperNavigateService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICategorie.html" data-type="entity-link" >ICategorie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Icategory.html" data-type="entity-link" >Icategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICategoryData.html" data-type="entity-link" >ICategoryData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICategoryObj.html" data-type="entity-link" >ICategoryObj</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Icontext.html" data-type="entity-link" >Icontext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICourseContext.html" data-type="entity-link" >ICourseContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDiscussionAllContext.html" data-type="entity-link" >IDiscussionAllContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IdiscussionConfig.html" data-type="entity-link" >IdiscussionConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDiscussionData.html" data-type="entity-link" >IDiscussionData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDiscussionTab.html" data-type="entity-link" >IDiscussionTab</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDiscussJsonData.html" data-type="entity-link" >IDiscussJsonData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEditor.html" data-type="entity-link" >IEditor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenuOptions.html" data-type="entity-link" >IMenuOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenuOptions-1.html" data-type="entity-link" >IMenuOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPageData.html" data-type="entity-link" >IPageData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPagination.html" data-type="entity-link" >IPagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPosts.html" data-type="entity-link" >IPosts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfile.html" data-type="entity-link" >IProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRelatedDiscussion.html" data-type="entity-link" >IRelatedDiscussion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITag.html" data-type="entity-link" >ITag</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITelemetryObj.html" data-type="entity-link" >ITelemetryObj</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITopic.html" data-type="entity-link" >ITopic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});