/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { COCOLineTickProps } from "./COCOLineTick";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LicardcheckmarkOverridesProps = {
    Licardcheckmark?: PrimitiveOverrideProps<FlexProps>;
    "COCO/Line/Tick"?: COCOLineTickProps;
} & EscapeHatchProps;
export declare type LicardcheckmarkProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LicardcheckmarkOverridesProps | undefined | null;
}>;
export default function Licardcheckmark(props: LicardcheckmarkProps): React.ReactElement;
