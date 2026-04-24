#!/usr/bin/env bash

# =============================================================================
# Pre-push hook: Verify assetPrefix is ENABLED in next.config.ts
# =============================================================================
# This script ensures that assetPrefix is not commented out before pushing.
# If assetPrefix is commented out or missing, the push will be BLOCKED.
# =============================================================================

set -euo pipefail

CONFIG_FILE="next.config.ts"
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color
BOLD='\033[1m'

echo ""
echo "🔍 Checking assetPrefix configuration in ${CONFIG_FILE}..."
echo ""

if [ ! -f "$CONFIG_FILE" ]; then
  echo -e "${RED}${BOLD}❌ ERROR: ${CONFIG_FILE} not found!${NC}"
  echo -e "${RED}   Cannot verify assetPrefix configuration.${NC}"
  exit 1
fi

# Check if there is an UNCOMMENTED assetPrefix line (active configuration)
# Match lines that:
#   - Do NOT start with // or * (comments)
#   - Contain "assetPrefix" followed by ":" or "="
ACTIVE_ASSET_PREFIX=$(grep -E '^\s*assetPrefix\s*[:=]' "$CONFIG_FILE" || true)

# Check if there are COMMENTED assetPrefix lines
COMMENTED_ASSET_PREFIX=$(grep -E '^\s*(//|/\*|\*)\s*assetPrefix' "$CONFIG_FILE" || true)

if [ -z "$ACTIVE_ASSET_PREFIX" ]; then
  echo -e "${RED}${BOLD}╔══════════════════════════════════════════════════════════════╗${NC}"
  echo -e "${RED}${BOLD}║              ❌ PUSH BLOCKED: assetPrefix DISABLED           ║${NC}"
  echo -e "${RED}${BOLD}╚══════════════════════════════════════════════════════════════╝${NC}"
  echo ""
  echo -e "${YELLOW}   assetPrefix must be ENABLED (uncommented) in ${CONFIG_FILE}${NC}"
  echo -e "${YELLOW}   before pushing to the remote repository.${NC}"
  echo ""

  if [ -n "$COMMENTED_ASSET_PREFIX" ]; then
    echo -e "${YELLOW}   Found commented-out assetPrefix line(s):${NC}"
    echo "$COMMENTED_ASSET_PREFIX" | while IFS= read -r line; do
      echo -e "${RED}     → $line${NC}"
    done
    echo ""
    echo -e "${GREEN}   ✅ FIX: Uncomment the assetPrefix line in ${CONFIG_FILE}${NC}"
  else
    echo -e "${YELLOW}   No assetPrefix configuration found at all.${NC}"
    echo ""
    echo -e "${GREEN}   ✅ FIX: Add an assetPrefix property to your Next.js config:${NC}"
    echo -e "${GREEN}      assetPrefix: '/seo-assets',${NC}"
  fi

  echo ""
  exit 1
fi

echo -e "${GREEN}${BOLD}✅ assetPrefix is ENABLED${NC}"
echo -e "${GREEN}   → ${ACTIVE_ASSET_PREFIX}${NC}"
echo ""
