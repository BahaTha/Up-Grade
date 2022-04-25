package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Categorie;
import com.example.demo.repository.CategorieRepository;

@RestController
@RequestMapping("/Categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategorieController {
	
	 @Autowired
		private CategorieRepository categorieRepository;
	    public void CategorieResource(CategorieRepository categorieRepository) {
	        this.categorieRepository = categorieRepository;
	    }
	    @GetMapping("/all")
	    public ResponseEntity<List<Categorie>> getAllCategories () {
	        List<Categorie> Categories = categorieRepository.findAll();
	        return new ResponseEntity<>(Categories, HttpStatus.OK);
	    }
	    @GetMapping("/find/{id}")
	    public ResponseEntity<Categorie> getCategorieById (@PathVariable("id") Long id) {
	    	Categorie Categorie = categorieRepository.findCategorieById(id);
	        return new ResponseEntity<>(Categorie, HttpStatus.OK);
	    }
	    @ResponseBody
	    @PostMapping("/add")
	    public ResponseEntity<Categorie> addCategorie(@RequestBody Categorie Categorie) {
	        Categorie newCategorie = categorieRepository.save(Categorie);
	        return new ResponseEntity<>(newCategorie, HttpStatus.CREATED);
	    }

	    @PutMapping("/update")
	    public ResponseEntity<Categorie> updateCategorie(@RequestBody Categorie categorie) {
	        Categorie updateCategorie = categorieRepository.save(categorie);
	        return new ResponseEntity<>(updateCategorie, HttpStatus.OK);
	    }

	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity<Categorie> deleteCategorie(@RequestBody Categorie categorie) {
	        categorieRepository.delete(categorie);
	        return new ResponseEntity<>(HttpStatus.OK);
	    }
	}

