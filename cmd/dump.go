package cmd

import (
	"fmt"
	"github.com/natesales/pathvector/internal/config"
	"github.com/natesales/pathvector/internal/util"
	"io/ioutil"
	"strings"

	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"gopkg.in/yaml.v2"
)

var (
	dumpYaml bool
)

func init() {
	dumpCmd.Flags().BoolVar(&dumpYaml, "yaml", false, "use YAML output (else use formatted table output)")
	rootCmd.AddCommand(dumpCmd)
}

var dumpCmd = &cobra.Command{
	Use:   "dump",
	Short: "Dump configuration",
	Run: func(cmd *cobra.Command, args []string) {
		// Load the config file from config file
		log.Debugf("Loading config from %s", configFile)
		configFile, err := ioutil.ReadFile(configFile)
		if err != nil {
			log.Fatal("Reading config file: " + err.Error())
		}
		c, err := config.Load(configFile)
		if err != nil {
			log.Fatal(err)
		}
		log.Debugln("Finished loading config")

		if dumpYaml {
			yamlBytes, err := yaml.Marshal(&c)
			if err != nil {
				log.Fatal(err)
			}
			fmt.Println(string(yamlBytes))
		} else {
			var data [][]string
			for peerName, peerData := range c.Peers {
				data = append(data, []string{
					peerName,
					fmt.Sprintf("%d", *peerData.ASN),
					fmt.Sprintf("%d", *peerData.LocalPref),
					fmt.Sprintf("%d", *peerData.Prepends),
					strings.Join(*peerData.NeighborIPs, ", "),
					util.StrDeref(peerData.Template),
					strings.Join(*peerData.BooleanOptions, ", "),
				})
			}

			util.PrintTable([]string{"Name", "ASN", "Local Pref", "Prepends", "Neighbors", "Template", "Options"}, data)
		}
	},
}