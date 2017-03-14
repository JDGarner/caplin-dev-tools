const {
  basename
} = require("path");

const aliasToModule = {
  "br.app-meta-service$": "@caplin/brjs-services/br.app-meta-service",
  "br.date-picker$": "@caplin/brjs-aliases/br.date-picker",
  "br.event-hub$": "@caplin/brjs-aliases/br.event-hub",
  "br.html-service$": "@caplin/brjs-services/br.html-service",
  "br.locale-provider$": "@caplin/brjs-services/br.locale-provider",
  "br.locale-service$": "@caplin/brjs-services/br.locale-service",
  "br.locale-switcher$": "@caplin/brjs-services/br.locale-switcher",
  "br.presenter-component$": "@caplin/brjs-aliases/br.presenter-component",
  "br.presenter.tooltip-helper$": "@caplin/brjs-aliases/br.presenter.tooltip-helper",
  "br.tooltip$": "@caplin/brjs-aliases/br.tooltip",
  "br.user-prompt-service$": "@caplin/brjs-services/br.user-prompt-service",
  "br.xml-service$": "@caplin/brjs-services/br.xml-service",
  "caplin.alerts.notification-service$": "@caplin/caplin-services/caplin.alerts.notification-service",
  "caplin.alerts.trigger-service$": "@caplin/caplin-services/caplin.alerts.trigger-service",
  "caplin.business-date-service$": "@caplin/caplin-services/caplin.business-date-service",
  "caplin.chart-ema-study$": "@caplin/caplin-aliases/caplin.chart-ema-study",
  "caplin.chart-macd-study$": "@caplin/caplin-aliases/caplin.chart-macd-study",
  "caplin.chart-sma-study$": "@caplin/caplin-aliases/caplin.chart-sma-study",
  "caplin.grid-component$": "@caplin/caplin-aliases/caplin.grid-component",
  "caplin.grid-drag-decorator$": "@caplin/caplin-aliases/caplin.grid-drag-decorator",
  "caplin.grid-drop-decorator$": "@caplin/caplin-aliases/caplin.grid-drop-decorator",
  "caplin.grid.refine.date-refine-component$": "@caplin/caplin-aliases/caplin.grid.refine.date-refine-component",
  "caplin.menu$": "@caplin/caplin-aliases/caplin.menu",
  "caplin.grid.refine.numeric-refine-component$": "@caplin/caplin-aliases/caplin.grid.refine.numeric-refine-component",
  "caplin.rttp-container-grid-data-provider$": "@caplin/caplin-aliases/caplin.rttp-container-grid-data-provider",
  "caplin.ui.input-control$": "@caplin/caplin-aliases/caplin.ui.input-control",
  "caplin.watchlist.watchlist-grid-data-provider$": "@caplin/caplin-aliases/caplin.watchlist.watchlist-grid-data-provider",
  "caplin.webcentric-proxy-component$": "@caplin/caplin-aliases/caplin.webcentric-proxy-component",
  "caplin.window-service$": "@caplin/caplin-services/caplin.window-service",
  "caplin.message-service$": "@caplin/caplin-services/caplin.message-service",
  "caplin.connection-service$": "@caplin/caplin-services/caplin.connection-service",
  "caplin.event-service$": "@caplin/caplin-services/caplin.event-service",
  "caplin.permission-service$": "@caplin/caplin-services/caplin.permission-service",
  "caplin.user-prompt-service$": "@caplin/caplin-services/caplin.user-prompt-service",
  "caplin.config-service$": "@caplin/caplin-services/caplin.config-service",
  "caplin.watchlist.watchlist-service$": "@caplin/caplin-services/caplin.watchlist.watchlist-service",
  "caplin.user-service$": "@caplin/caplin-services/caplin.user-service",
  "caplin.storage-service$": "@caplin/caplin-services/caplin.storage-service",
  "caplin.trade-service$": "@caplin/caplin-services/caplin.trade-service",
  "caplin.preference-service$": "@caplin/caplin-services/caplin.preference-service",
  "caplin.metals-service$": "@caplin/caplin-services/caplin.metals-service",
  "caplin.PopupManager$": "@caplin/caplin-services/caplin.PopupManager",
  "caplin.popout-service$": "@caplin/caplin-services/caplin.popout-service",
  "caplin.web-service-grid-data-provider$": "@caplin/caplin-services/caplin.web-service-grid-data-provider",
  "caplin.layout-service$": "@caplin/caplin-services/caplin.layout-service",
  "caplin.fx.confirmation$": "@caplin/caplin-fx-services/caplin.fx.confirmation",
  "caplin.ui.global-menu-control$": "@caplin/caplin-services/caplin.ui.global-menu-control",
  "caplin.xml-presenter-serializer$": "@caplin/caplin-services/caplin.xml-presenter-serializer",
  "caplin.fx.permission-service$": "@caplin/caplin-fx-services/caplin.fx.permission-service",
  "caplin.fx.account-service$": "@caplin/caplin-fx-services/caplin.fx.account-service",
  "caplin.fx.currency-pair-service$": "@caplin/caplin-fx-services/caplin.fx.currency-pair-service",
  "caplin.fx.tenor-service$": "@caplin/caplin-fx-services/caplin.fx.tenor-service",
  "caplin.trade-message-service$": "@caplin/caplin-services/caplin.trade-message-service",
  "caplin.trade-channel-mapper-service$": "@caplin/caplin-services/caplin.trade-channel-mapper-service",
  "caplin.trading.confirmation-service$": "@caplin/caplin-services/caplin.trading.confirmation-service",
  "caplin.fx.tenor.currency-tenors$": "@caplin/caplin-fx-aliases/caplin.fx.tenor.currency-tenors",
  "caplin.fx.business-date-service$": "@caplin/caplin-fx-services/caplin.fx.business-date-service",
  "caplin.tobo-user-service$": "@caplin/caplin-services/caplin.tobo-user-service",
  "caplin.fx.execute-button$": "@caplin/caplin-aliases/caplin.fx.execute-button",
  "caplin.keybindings.keybindings-service$": "@caplin/caplin-services/caplin.keybindings.keybindings-service",
  "caplin.trade-permission-service$": "@caplin/caplin-services/caplin.trade-permission-service",
  "caplin.workbench-trade-service$": "@caplin/caplin-services/caplin.workbench-trade-service",
  "caplin.grid-scroll-tip-decorator$": "@caplin/caplin-aliases/caplin.grid-scroll-tip-decorator",
  "caplin.ui.autocomplete-selection$": "@caplin/caplin-aliases/caplin.ui.autocomplete-selection",
  "caplin.ui.chosen-select-box-control$": "@caplin/caplin-aliases/caplin.ui.chosen-select-box-control",
  "caplin.column-resizing-decorator$": "@caplin/caplin-aliases/caplin.column-resizing-decorator",
  "caplin.column-reset-decorator$": "@caplin/caplin-aliases/caplin.column-reset-decorator",
  "caplin.row-loading-decorator$": "@caplin/caplin-aliases/caplin.row-loading-decorator",
  "caplin.availability.currency-pair-availability-service$": "@caplin/caplin-services/caplin.availability.currency-pair-availability-service",
  "caplin.availability.tenor-availability-service$": "@caplin/caplin-services/caplin.availability.tenor-availability-service",
  "caplin.ui.autocomplete-input$": "@caplin/caplin-aliases/caplin.ui.autocomplete-input",
  "caplin.sljs-container-grid-data-provider$": "@caplin/caplin-aliases/caplin.sljs-container-grid-data-provider",
  "caplin.column-header-menu-decorator$": "@caplin/caplin-aliases/caplin.column-header-menu-decorator",
  "caplin.grid-data-not-found-decorator$": "@caplin/caplin-aliases/caplin.grid-data-not-found-decorator",
  "caplin.ui.number-incrementor$": "@caplin/caplin-aliases/caplin.ui.number-incrementor",
  "caplin.ui.amount-control$": "@caplin/caplin-aliases/caplin.ui.amount-control",
  "caplin.lefty-layout$": "@caplin/caplin-aliases/caplin.lefty-layout",
  "caplin.column-reordering-decorator$": "@caplin/caplin-aliases/caplin.column-reordering-decorator",
  "caplin.ui.autocomplete-control$": "@caplin/caplin-aliases/caplin.ui.autocomplete-control",
  "caplin.ui.draggable-control$": "@caplin/caplin-aliases/caplin.ui.draggable-control",
  "caplin.ui.tooltip-control$": "@caplin/caplin-aliases/caplin.ui.tooltip-control",
  "caplin.fx.date-picker$": "@caplin/caplin-aliases/caplin.fx.date-picker",
  "caplin.menu.menu-control$": "@caplin/caplin-aliases/caplin.menu.menu-control",
  "caplin.ui.collapsible-control$": "@caplin/caplin-aliases/caplin.ui.collapsible-control",
  "caplin.ui.toggle-control$": "@caplin/caplin-aliases/caplin.ui.toggle-control",
  "caplin.motf.confirmation$": "@caplin/caplin-aliases/caplin.motf.confirmation",
  "caplin.motf.cancel$": "@caplin/caplin-aliases/caplin.motf.cancel",
  "caplin.motf.cancel.confirmation$": "@caplin/caplin-aliases/caplin.motf.cancel.confirmation",
  "caplin.grid.refine.text-refine-component$": "@caplin/caplin-aliases/caplin.grid.refine.text-refine-component",
  "caplinps.application-menu-service$": "@caplin/caplinps-services/caplinps.application-menu-service",
  "caplinps.blottertabs.grid-data-row-highlight-decorator$": "@caplin/caplinps-aliases/caplinps.blottertabs.grid-data-row-highlight-decorator",
  "caplinps.blottertabs.tab-control$": "@caplin/caplinps-aliases/caplinps.blottertabs.tab-control",
  "caplinps.blottertabs.blotter-creation-service$": "@caplin/caplinps-services/caplinps.blottertabs.blotter-creation-service",
  "caplinps.blottertabs.blotter-service$": "@caplin/caplinps-services/caplinps.blottertabs.blotter-service",
  "caplinps.blottertabs.tab-control-service$": "@caplin/caplinps-services/caplinps.blottertabs.tab-control-service",
  "caplinps.blottertabs.tabbed-blotter$": "@caplin/caplinps-aliases/caplinps.blottertabs.tabbed-blotter",
  "caplinps.clientsearch.clientSearchFactory$": "@caplin/caplinps-aliases/caplinps.clientsearch.clientSearchFactory",
  "caplinps.collapsible-menu-model$": "@caplin/caplinps-aliases/caplinps.collapsible-menu-model",
  "caplinps.component-lifecycle-workbench-tool$": "@caplin/caplinps-services/caplinps.component-lifecycle-workbench-tool",
  "caplinps.config-workbench-tool$": "@caplin/caplinps-services/caplinps.config-workbench-tool",
  "caplinps.fx.confirmation$": "@caplin/caplinps-aliases/caplinps.fx.confirmation",
  "caplinps.fx.tile.factory$": "@caplin/caplinps-aliases/caplinps.fx.tile.factory",
  "caplinps.fx.execution.floating-tooltip$": "@caplin/caplinps-services/caplinps.fx.execution.floating-tooltip",
  "caplinps.fx.tile.shield$": "@caplin/caplinps-aliases/caplinps.fx.tile.shield",
  "caplinps.fx.execution.fx-date-picker$": "@caplin/caplinps-aliases/caplinps.fx.execution.fx-date-picker",
  "caplinps.grid.date-refine-component$": "@caplin/caplinps-aliases/caplinps.grid.date-refine-component",
  "caplinps.grid.date-time-refine-component$": "@caplin/caplinps-aliases/caplinps.grid.date-time-refine-component",
  "caplinps.grid.toolbar-decorator$": "@caplin/caplinps-aliases/caplinps.grid.toolbar-decorator",
  "caplinps.grid.toolbar-component$": "@caplin/caplinps-aliases/caplinps.grid.toolbar-component",
  "caplinps.grid.numeric-refine-component$": "@caplin/caplinps-aliases/caplinps.grid.numeric-refine-component",
  "caplinps.logging.activity-log-store$": "@caplin/caplinps-services/caplinps.logging.activity-log-store",
  "caplinps.messaging-workbench-tool$": "@caplin/caplinps-aliases/caplinps.messaging-workbench-tool",
  "caplinps.ministatemodelvisualiser-workbench-tool$": "@caplin/caplinps-aliases/caplinps.ministatemodelvisualiser-workbench-tool",
  "caplinps.menu-selectable-item-model$": "@caplin/caplinps-aliases/caplinps.menu-selectable-item-model",
  "caplinps.permissioning-workbench-tool$": "@caplin/caplinps-aliases/caplinps.permissioning-workbench-tool",
  "caplinps.permissioned-menu-item-model$": "@caplin/caplinps-aliases/caplinps.permissioned-menu-item-model",
  "caplinps.shared-message-service$": "@caplin/caplinps-services/caplinps.shared-message-service",
  "caplinps.tabs.tab-menu-control$": "@caplin/caplinps-aliases/caplinps.tabs.tab-menu-control",
  "caplinps.tobo.account-service$": "@caplin/caplinps-services/caplinps.tobo.account-service",
  "caplinps.tobo.multiple-user-service$": "@caplin/caplinps-services/caplinps.tobo.multiple-user-service",
  "caplinps.tobo.recentusers.recent-users-service$": "@caplin/caplinps-services/caplinps.tobo.recentusers.recent-users-service",
  "caplinps.tobo.search-service$": "@caplin/caplinps-services/caplinps.tobo.search-service",
  "caplinps.tobo.grid.dataprovider.sljs-tobo-container-grid-data-provider$": "@caplin/caplinps-aliases/caplinps.tobo.grid.dataprovider.sljs-tobo-container-grid-data-provider",
  "caplinps.tradechannelstatus-workbench-tool$": "@caplin/caplinps-aliases/caplinps.tradechannelstatus-workbench-tool",
  "caplinps.ui.dialog.dialog-manager$": "@caplin/caplinps-aliases/caplinps.ui.dialog.dialog-manager",
  "caplinps.userpreferences.user-preferences-service$": "@caplin/caplinps-services/caplinps.userpreferences.user-preferences-service",
  "caplinps.ui.dialog.default-layout-handler$": "@caplin/caplinps-aliases/caplinps.ui.dialog.default-layout-handler",
  "caplinps.watchlists.watchlist-sub-menu-model$": "@caplin/caplinps-aliases/caplinps.watchlists.watchlist-sub-menu-model",
  "caplinps.watchlists.toolbar-component$": "@caplin/caplinps-aliases/caplinps.watchlists.toolbar-component",
  "caplinps.workbench-component-lifecycle-service$": "@caplin/caplinps-services/caplinps.workbench-component-lifecycle-service",
  "caplinps.workbench-trade-service-listener$": "@caplin/caplinps-services/caplinps.workbench-trade-service-listener",
  "caplinx.fxtrader.tile.trade-tile$": "@caplin/caplinx-aliases/caplinx.fxtrader.tile.trade-tile",
  "caplinx.motf.orderticket.indicative-rate$": "@caplin/caplinx-aliases/caplinx.motf.orderticket.indicative-rate",
  "caplinx.motf.motfticket.motf-trade-factory$": "@caplin/caplinx-aliases/caplinx.motf.motfticket.motf-trade-factory",
  "caplinx.scaffold.searchbutton.search-button$": "@caplin/caplinx-aliases/caplinx.scaffold.searchbutton.search-button",
  "caplinx.tilecontainer.tradertilecontainer-component$": "@caplin/caplinx-aliases/caplinx.tilecontainer.tradertilecontainer-component",
  "caplinx.scaffold.newtradebutton.new-trade-button$": "@caplin/caplinx-aliases/caplinx.scaffold.newtradebutton.new-trade-button",
  "caplinx.rates.accountselector.service$": "@caplin/caplinx-services/caplinx.rates.accountselector.service",
  "caplinx.scaffold.loadingscreen.loadingscreen$": "@caplin/caplinx-aliases/caplinx.scaffold.loadingscreen.loadingscreen",
  "caplinx.users.clientsearch.client-search$": "@caplin/caplinx-aliases/caplinx.users.clientsearch.client-search",
  "caplinx.scaffold.userinfo.user-name$": "@caplin/caplinx-aliases/caplinx.scaffold.userinfo.user-name",
  "caplinx.users.clientsearch.client-search-control$": "@caplin/caplinx-aliases/caplinx.users.clientsearch.client-search-control",
  "caplinx.tilecontainer.clienttilecontainer-component$": "@caplin/caplinx-aliases/caplinx.tilecontainer.clienttilecontainer-component",
  "caplinx.tilecontainer.ordertilecontainer-component$": "@caplin/caplinx-aliases/caplinx.tilecontainer.ordertilecontainer-component",
  "caplinx.users.recentusers.recentusers-component$": "@caplin/caplinx-aliases/caplinx.users.recentusers.recentusers-component",
  "caplinx.scaffold.sidemenu.sidemenu-component$": "@caplin/caplinx-aliases/caplinx.scaffold.sidemenu.sidemenu-component",
  "caplinx.fxexecution.tilelayout.tile-set$": "@caplin/caplinx-aliases/caplinx.fxexecution.tilelayout.tile-set",
  "caplinx.fxexecution.tilelayout.tilesframe$": "@caplin/caplinx-aliases/caplinx.fxexecution.tilelayout.tilesframe",
  "caplinx.watchlists.fxwatchlists.watchlist-component$": "@caplin/caplinx-aliases/caplinx.watchlists.fxwatchlists.watchlist-component",
  "caplinx.motf.motfticket.motf-ticket$": "@caplin/caplinx-aliases/caplinx.motf.motfticket.motf-ticket",
  "caplinx.motf.clientinfo.component$": "@caplin/caplinx-aliases/caplinx.motf.clientinfo.component",
  "caplinx.dockingpanel.user-container-manager$": "@caplin/caplinx-aliases/caplinx.dockingpanel.user-container-manager",
  "caplinx.motf.orderticket.component$": "@caplin/caplinx-aliases/caplinx.motf.orderticket.component",
  "caplinx.motf.motfticket.amend-trade-factory$": "@caplin/caplinx-aliases/caplinx.motf.motfticket.amend-trade-factory",
  "caplinx.fxblotters.orders.bulk-action-blotter-launcher$": "@caplin/caplinx-services/caplinx.fxblotters.orders.bulk-action-blotter-launcher",
  "caplinx.fxblotters.orders.bulk-order-state-manager$": "@caplin/caplinx-services/caplinx.fxblotters.orders.bulk-order-state-manager",
  "caplinx.fxblotters.orders.order-action-allowed-service$": "@caplin/caplinx-services/caplinx.fxblotters.orders.order-action-allowed-service",
  "caplinx.fxblotters.orders.order-actions-menu-service$": "@caplin/caplinx-services/caplinx.fxblotters.orders.order-actions-menu-service",
  "caplinx.fxblotters.orders.order-state-manager$": "@caplin/caplinx-services/caplinx.fxblotters.orders.order-state-manager",
  "caplinx.dockingpanel.dockingpanel-component$": "@caplin/caplinx-aliases/caplinx.dockingpanel.dockingpanel-component",
  "caplinx.dockedcontainer.docked-container-service$": "@caplin/caplinx-services/caplinx.dockedcontainer.docked-container-service"
};

module.exports.configureAliases = function configureAliases(
  aliases,
  webpackConfig,
  testAliases = aliases,
  webpackAppAliases = {}
) {
  const lifeCycleEvent = process.env.npm_lifecycle_event || "";
  const isTest = basename(process.argv[1]) === "tests.js" ||
    lifeCycleEvent.startsWith("test");
  const aliasesToUse = isTest ? testAliases : aliases;

  // Attach the AliasRegistry aliases to the app's webpack aliases.
  Object.keys(aliasesToUse).forEach(alias => {
    const exactMatchAlias = `${alias}$`;
    const moduleToAlias = aliasToModule[exactMatchAlias];

    if (moduleToAlias) {
      webpackAppAliases[exactMatchAlias] = moduleToAlias;
    }
  });

  // Attach the app aliases to the webpack default config ones.
  Object.assign(webpackConfig.resolve.alias, webpackAppAliases);
};
