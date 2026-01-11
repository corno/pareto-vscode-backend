    import * as _p from 'pareto-core-serializer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/server/serialize"
    import * as _i_serialize from "../../generic/serialize"
    import * as _i_marshall from "./marshall"
    
    
    export const Diagnostic_Severity: _i_signatures._T_Diagnostic_Severity = ($, $p) => _i_serialize.Document(
        _i_marshall.Diagnostic_Severity(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Position: _i_signatures._T_Position = ($, $p) => _i_serialize.Document(
        _i_marshall.Position(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Range: _i_signatures._T_Range = ($, $p) => _i_serialize.Document(
        _i_marshall.Range(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Diagnostic: _i_signatures._T_Diagnostic = ($, $p) => _i_serialize.Document(
        _i_marshall.Diagnostic(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Diagnostics: _i_signatures._T_Diagnostics = ($, $p) => _i_serialize.Document(
        _i_marshall.Diagnostics(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Document_Data: _i_signatures._T_Document_Data = ($, $p) => _i_serialize.Document(
        _i_marshall.Document_Data(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Hover_Texts: _i_signatures._T_Hover_Texts = ($, $p) => _i_serialize.Document(
        _i_marshall.Hover_Texts(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Optional_Hover_Texts: _i_signatures._T_Optional_Hover_Texts = ($, $p) => _i_serialize.Document(
        _i_marshall.Optional_Hover_Texts(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const On_Hover_Result: _i_signatures._T_On_Hover_Result = ($, $p) => _i_serialize.Document(
        _i_marshall.On_Hover_Result(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Completion_Items: _i_signatures._T_Completion_Items = ($, $p) => _i_serialize.Document(
        _i_marshall.Completion_Items(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Optional_Completion_Items: _i_signatures._T_Optional_Completion_Items = ($, $p) => _i_serialize.Document(
        _i_marshall.Optional_Completion_Items(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const On_Completion_Result: _i_signatures._T_On_Completion_Result = ($, $p) => _i_serialize.Document(
        _i_marshall.On_Completion_Result(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const On_Validate_Document_Result: _i_signatures._T_On_Validate_Document_Result = ($, $p) => _i_serialize.Document(
        _i_marshall.On_Validate_Document_Result(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Convert_To_JSON_Parameters: _i_signatures._T_Convert_To_JSON_Parameters = ($, $p) => _i_serialize.Document(
        _i_marshall.Convert_To_JSON_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Seal_Parameters: _i_signatures._T_Seal_Parameters = ($, $p) => _i_serialize.Document(
        _i_marshall.Seal_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const On_Completion_Parameters: _i_signatures._T_On_Completion_Parameters = ($, $p) => _i_serialize.Document(
        _i_marshall.On_Completion_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const On_Hover_Parameters: _i_signatures._T_On_Hover_Parameters = ($, $p) => _i_serialize.Document(
        _i_marshall.On_Hover_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Validate_Document_Parameters: _i_signatures._T_Validate_Document_Parameters = ($, $p) => _i_serialize.Document(
        _i_marshall.Validate_Document_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
