/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type COCOLineGalleryOverridesProps = {
    COCOLineGallery?: PrimitiveOverrideProps<ViewProps>;
    Vector442293?: PrimitiveOverrideProps<ViewProps>;
    Vector442294?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type COCOLineGalleryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: COCOLineGalleryOverridesProps | undefined | null;
}>;
export default function COCOLineGallery(props: COCOLineGalleryProps): React.ReactElement;
