using System;
using System.Collections.Generic;
using AutoMapper;
using CommandApi.Data;
using CommandApi.Dtos;
using CommandApi.Models;
using Microsoft.AspNetCore.Mvc;


namespace CommandApi.Controllers
{

    [Route("api/devices")]
    [ApiController]
    public class DevicesController:ControllerBase
    {
        private readonly IDevicesRepo _repoDevices;
        private readonly IMapper _mapper;

        public DevicesController(IDevicesRepo repository,IMapper mapper){
            _repoDevices=repository;
            _mapper=mapper;
        }

        //GET api/devices
        [HttpGet]
        public ActionResult<IEnumerable<DevicesReadDto>> GetAllUrzadzenia(){
            var commandItems = _repoDevices.GetAllUrzadzenia();
            return Ok(_mapper.Map<IEnumerable<DevicesReadDto>>(commandItems));
        }


        //GET api/devices/{id}
        [HttpGet("{id}", Name="GetDeviceById")]
        public ActionResult<DevicesReadDto> GetDeviceById(short? id){
            var commandItem = _repoDevices.GetDeviceById(id);
            if(commandItem!=null){
                return Ok(_mapper.Map<DevicesReadDto>(commandItem));
            }
            else{
                return NotFound();
            }
        }

        //GET api/devices/types
        [HttpGet("types", Name="GetAllTypes")]
        public ActionResult<List<string>> GetAllTypes(){
            var commandItem = _repoDevices.GetAllTypes();
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }
        
        //GET api/devices/brandstest
        [HttpGet("brandstest", Name="GetAllBrandstest")]
        public ActionResult<List<string>> GetAllBrands(){
            var commandItem = _repoDevices.GetAllBrands();
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }
        //GET api/devices/brands
        [HttpGet("brands", Name="GetAllBrands")]
        public ActionResult<List<Urzadzenia2>> GetAllBrandstest(){
            var commandItem = _repoDevices.GetBrandsTest();
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }
        //GET api/devices/modelstest
        [HttpGet("modelstest", Name="GetAllModelstest")]
        public ActionResult<List<Urzadzenia2>> GetAllModelstest(){
            var commandItem = _repoDevices.GetModelsTest();
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }
        
        //GET api/devices/models
        [HttpGet("models", Name="GetAllModels")]
        public ActionResult<List<string>> GetAllModels(){
            var commandItem = _repoDevices.GetAllModels();
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }

        //GET api/devices/types/{type}
        [HttpGet("types/{type}", Name="GetSpecificBrand")]
        public ActionResult<List<string>> GetSpecificBrand(string type){
            var commandItem = _repoDevices.GetSpecificBrand(type);
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }

        //GET api/devices/types/{type}/{brand}
        [HttpGet("types/{type}/{brand}", Name="GetSpecificModel")]
        public ActionResult<List<string>> GetSpecificModel(string type,string brand){
            var commandItem = _repoDevices.GetSpecificModel(type,brand);
            
            if(commandItem!=null){
                return Ok(commandItem);
            }
            else{
                return NotFound();
            }
        }

        //DELETE api/devices/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteUrzadzenia(short? id)
        {
            var commandItem=_repoDevices.GetDeviceById(id);
            if(commandItem!=null){
                _repoDevices.DeleteUrzadzenia(commandItem);
                _repoDevices.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

        //POST api/devices
        [HttpPost]
        public ActionResult<DevicesReadDto> CreateClient(DevicesCreateDto urzadzenie){
            var urzadzeniaModel = _mapper.Map<Device>(urzadzenie);
            _repoDevices.CreateDevice(urzadzeniaModel);
            _repoDevices.SaveChanges();
            var DevicesReadDto= _mapper.Map<DevicesReadDto>(urzadzeniaModel);
            return CreatedAtRoute(nameof(GetDeviceById), new {id = DevicesReadDto.IdDevices},DevicesReadDto);

        }


        //PUT api/devices/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateKliecni(short? id, DevicesCreateDto urzadzenie){
             var commandItem = _repoDevices.GetDeviceById(id);
            
            if(commandItem!=null){
                _mapper.Map(urzadzenie,commandItem);
                _repoDevices.UpdateUrzadzenia(commandItem);
                _repoDevices.SaveChanges();
                return NoContent();
            }
            else{
                return NotFound();
            }
        }

    }
}