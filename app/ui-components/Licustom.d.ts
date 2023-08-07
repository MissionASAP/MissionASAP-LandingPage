/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LicustomOverridesProps = {
    Licustom?: PrimitiveOverrideProps<FlexProps>;
    row?: PrimitiveOverrideProps<FlexProps>;
    col807500?: PrimitiveOverrideProps<FlexProps>;
    "01"?: PrimitiveOverrideProps<TextProps>;
    col807516?: PrimitiveOverrideProps<FlexProps>;
    "Without a big budget, it's hard to approach venture investors"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LicustomProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LicustomOverridesProps | undefined | null;
}>;
export default function Licustom(props: LicustomProps): React.ReactElement;
