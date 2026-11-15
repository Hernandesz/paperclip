import { uiText } from "@/i18n/ui-language";
import type { DeploymentExposure, DeploymentMode } from "@paperclipai/shared";
import { Badge } from "@/components/ui/badge";

export function ModeBadge({
  deploymentMode,
  deploymentExposure,
}: {
  deploymentMode?: DeploymentMode;
  deploymentExposure?: DeploymentExposure;
}) {
  if (!deploymentMode) return null;

  const label =
    deploymentMode === "local_trusted"
      ? uiText("Local trusted")
      : uiText(deploymentExposure === "public" ? "Authenticated public" : "Authenticated private");

  return <Badge variant="outline">{label}</Badge>;
}
