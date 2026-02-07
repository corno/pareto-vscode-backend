
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Position_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Position
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Position_ = (
    context: Position_.I,
    abort: _pi.Abort<Position_.E>,
) => Position_.O

export namespace Range_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Range
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Range_ = (
    context: Range_.I,
    abort: _pi.Abort<Range_.E>,
) => Range_.O

export namespace Format_Options_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Format_Options
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Format_Options_ = (
    context: Format_Options_.I,
    abort: _pi.Abort<Format_Options_.E>,
) => Format_Options_.O

export namespace Text_Edit_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Text_Edit
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_Edit_ = (
    context: Text_Edit_.I,
    abort: _pi.Abort<Text_Edit_.E>,
) => Text_Edit_.O

export namespace Replace_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Replace
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Replace_ = (
    context: Replace_.I,
    abort: _pi.Abort<Replace_.E>,
) => Replace_.O

export namespace Format_Result_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Format_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Format_Result_ = (
    context: Format_Result_.I,
    abort: _pi.Abort<Format_Result_.E>,
) => Format_Result_.O

export namespace Format_Error_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Format_Error
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Format_Error_ = (
    context: Format_Error_.I,
    abort: _pi.Abort<Format_Error_.E>,
) => Format_Error_.O

export namespace Format_Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Format_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Format_Parameters_ = (
    context: Format_Parameters_.I,
    abort: _pi.Abort<Format_Parameters_.E>,
) => Format_Parameters_.O

export namespace Sort_Alphabetically_Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Sort_Alphabetically_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Sort_Alphabetically_Parameters_ = (
    context: Sort_Alphabetically_Parameters_.I,
    abort: _pi.Abort<Sort_Alphabetically_Parameters_.E>,
) => Sort_Alphabetically_Parameters_.O

export { 
    Position_ as Position, 
    Range_ as Range, 
    Format_Options_ as Format_Options, 
    Text_Edit_ as Text_Edit, 
    Replace_ as Replace, 
    Format_Result_ as Format_Result, 
    Format_Error_ as Format_Error, 
    Format_Parameters_ as Format_Parameters, 
    Sort_Alphabetically_Parameters_ as Sort_Alphabetically_Parameters, 
}
