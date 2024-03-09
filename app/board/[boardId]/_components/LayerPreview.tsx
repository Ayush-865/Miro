"use client";

import { memo } from "react";

import { LayerType, RectangleLayer } from "@/types/canvas";
import { useStorage } from "@/liveblocks.config";
import Rectangle from "./Rectangle";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    console.log("layer", layer);

    if (!layer) {
      return null;
    }

    if (layer.type === LayerType.Rectangle) {
      return (
        <Rectangle
          id={id}
          layer={layer as RectangleLayer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );
    }
  }
);

export default LayerPreview;

LayerPreview.displayName = "LayerPreview";
