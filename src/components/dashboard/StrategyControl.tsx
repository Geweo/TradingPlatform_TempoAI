import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Settings2, RefreshCw, Save } from "lucide-react";

interface StrategyControlProps {
  onParameterChange?: (param: string, value: number | boolean) => void;
  onSave?: () => void;
  onReset?: () => void;
  isEnabled?: boolean;
  riskLevel?: number;
  stopLoss?: number;
  takeProfit?: number;
}

const StrategyControl = ({
  onParameterChange = () => {},
  onSave = () => {},
  onReset = () => {},
  isEnabled = true,
  riskLevel = 50,
  stopLoss = 5,
  takeProfit = 10,
}: StrategyControlProps) => {
  return (
    <Card className="w-full bg-background">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center gap-2">
          <Settings2 className="h-5 w-5" />
          Strategy Control
        </CardTitle>
        <div className="flex items-center gap-2">
          <Label htmlFor="strategy-toggle">Strategy Active</Label>
          <Switch
            id="strategy-toggle"
            checked={isEnabled}
            onCheckedChange={(checked) =>
              onParameterChange("isEnabled", checked)
            }
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Risk Level</Label>
            <Slider
              value={[riskLevel]}
              onValueChange={(value) =>
                onParameterChange("riskLevel", value[0])
              }
              max={100}
              step={1}
            />
            <div className="text-sm text-muted-foreground text-right">
              {riskLevel}%
            </div>
          </div>

          <div className="space-y-2">
            <Label>Stop Loss</Label>
            <Slider
              value={[stopLoss]}
              onValueChange={(value) => onParameterChange("stopLoss", value[0])}
              max={20}
              step={0.5}
            />
            <div className="text-sm text-muted-foreground text-right">
              {stopLoss}%
            </div>
          </div>

          <div className="space-y-2">
            <Label>Take Profit</Label>
            <Slider
              value={[takeProfit]}
              onValueChange={(value) =>
                onParameterChange("takeProfit", value[0])
              }
              max={50}
              step={0.5}
            />
            <div className="text-sm text-muted-foreground text-right">
              {takeProfit}%
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Reset
          </Button>
          <Button
            size="sm"
            onClick={onSave}
            className="flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrategyControl;
