import { uiText } from "@/i18n/ui-language";
import type { ReactNode, Ref } from "react";
import { List, Network, Plus } from "lucide-react";
import { ToolbarSearch } from "./ToolbarSearch";
import { Button } from "./ui/button";
import { OrgChartControls, type OrgChartActions } from "./OrgChartControls";

export interface AgentsToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  view: "list" | "org";
  onViewChange: (value: "list" | "org") => void;
  hideViewToggle?: boolean;
  onNewAgent: () => void;
  filters?: ReactNode;
  orgControlsRef?: Ref<HTMLDivElement>;
  orgActions?: OrgChartActions;
}

/** Shared roster search, view controls and actions for the page and stories. */
export function AgentsToolbar({ query, onQueryChange, view, onViewChange, hideViewToggle, onNewAgent, filters, orgControlsRef, orgActions }: AgentsToolbarProps) {
  return <div data-canonical-toolbar="agents" role="toolbar" aria-label={uiText("Agents controls")} className="flex flex-wrap items-center gap-3">
    <div className="design-toolbar-controls flex w-full flex-wrap items-center gap-4">
      <ToolbarSearch query={query} onQueryChange={onQueryChange} label={uiText("Search agents")} placeholder={uiText("Search agents…")} />
      {!hideViewToggle && <div className="design-view-toggle" role="group" aria-label={uiText("Agent view")}>
          <Button type="button" size="icon-sm" variant={view === "list" ? "secondary" : "ghost"} className="design-toolbar-icon" onClick={() => onViewChange("list")} title={uiText("List view")} aria-label={uiText("List view")} aria-pressed={view === "list"}><List aria-hidden /></Button>
          <Button type="button" size="icon-sm" variant={view === "org" ? "secondary" : "ghost"} className="design-toolbar-icon" onClick={() => onViewChange("org")} title={uiText("Org chart view")} aria-label={uiText("Org chart view")} aria-pressed={view === "org"}><Network aria-hidden /></Button>
      </div>}
      {filters}
      <div className="design-toolbar-actions">
        {orgActions && (
          <div ref={orgControlsRef} data-org-toolbar-controls className="agents-org-controls-reveal"
            data-visible={view === "org"} aria-hidden={view !== "org"} inert={view !== "org"}>
            <div className="min-w-0 overflow-hidden"><OrgChartControls {...orgActions} /></div>
          </div>
        )}
        <Button size="sm" variant="outline" data-toolbar-primary onClick={onNewAgent}><Plus aria-hidden />{uiText("New Agent")}</Button>
      </div>
    </div>
  </div>;
}
