    import * as _p from 'pareto-core/dist/serializer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/client/serialize"
    import * as _i_serialize from "../../generic/serialize"
    import * as _i_marshall from "./marshall"
    
    
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
    export const Format_Options: _i_signatures._T_Format_Options = ($, $p) => _i_serialize.Document(
        _i_marshall.Format_Options(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Replace: _i_signatures._T_Replace = ($, $p) => _i_serialize.Document(
        _i_marshall.Replace(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Text_Edit: _i_signatures._T_Text_Edit = ($, $p) => _i_serialize.Document(
        _i_marshall.Text_Edit(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Format_Result: _i_signatures._T_Format_Result = ($, $p) => _i_serialize.Document(
        _i_marshall.Format_Result(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Format_Error: _i_signatures._T_Format_Error = ($, $p) => _i_serialize.Document(
        _i_marshall.Format_Error(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Format_Parameters: _i_signatures._T_Format_Parameters = ($, $p) => _i_serialize.Document(
        _i_marshall.Format_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Sort_Alphabetically_Parameters: _i_signatures._T_Sort_Alphabetically_Parameters = ($, $p) => _i_serialize.Document(
        _i_marshall.Sort_Alphabetically_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
